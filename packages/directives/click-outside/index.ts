import { DirectiveBinding } from 'vue';

export const clickOutside = {
  mounted(
    el: HTMLElement & { _clickOutside: Function },
    binding: DirectiveBinding
  ) {
    const onClick = (event: MouseEvent) => {
      const isClickOutside = !(
        el === event.target || el.contains(event.target as Node)
      );
      binding.value(isClickOutside);
    };
    document.body.addEventListener('click', onClick);
    el._clickOutside = onClick;
  },
  unmounted(el: HTMLElement & { _clickOutside: Function }) {
    document.body.removeEventListener('click', el._clickOutside);
    delete el._clickOutside;
  }
};
export default clickOutside;
