import { DirectiveBinding } from 'vue';

export const clickOutside = {
  // 指令的绑定函数，在元素插入到 DOM 中时执行
  mounted(
    el: HTMLElement,
    binding: DirectiveBinding<{
      whitelist: HTMLElement[];
      callback: (val: 'inside' | 'whitelist' | 'outside') => void;
    }>
  ) {
    // 点击事件的处理函数
    const handleClickOutside = (event: Event) => {
      // 判断点击的元素是否在容器内或容器外
      if (el.contains(event.target) || el === event.target) {
        binding.value.callback && binding.value.callback('inside');
        return;
      }

      // 获取白名单列表
      const whitelist = binding.value?.whitelist || [];

      // 判断点击的元素是否在白名单内
      if (
        whitelist.some((item: HTMLElement) =>
          item.contains(event.target as HTMLElement)
        )
      ) {
        binding.value.callback && binding.value.callback('whitelist');
        return;
      }

      // 如果点击事件发生在容器外且不在白名单内，就执行绑定的回调函数
      binding.value.callback && binding.value.callback('outside');
    };

    // 给 document 添加点击事件监听器
    document.addEventListener('click', handleClickOutside);

    // 在元素上添加一个 `ref`，指向容器元素
    el._clickOutside = binding.arg;
  },

  // 指令的解绑函数，在元素从 DOM 中移除时执行
  unmounted(el) {
    // 移除 document 上的点击事件监听器
    document.removeEventListener('click', el._clickOutside);
  }
};
export default clickOutside;
