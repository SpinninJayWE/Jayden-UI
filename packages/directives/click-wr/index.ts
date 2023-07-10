function createRipple(e: MouseEvent) {
  const target = e.target as HTMLElement;
  console.log(target);

  const { offsetX, offsetY } = e;
  const rippleDiv = document.createElement('div');
  rippleDiv.className = 'ripple-dom';
  rippleDiv.style.left = offsetX + 'px';
  rippleDiv.style.top = offsetY + 'px';

  target.appendChild(rippleDiv);
  setTimeout(() => {
    rippleDiv.remove();
  }, 750);
}

export default {
  created(el: HTMLElement) {
    console.log(el);

    el.addEventListener('click', createRipple, true);
  },
  beforeUnmount(el: HTMLElement) {
    el.removeEventListener('click', createRipple, true);
  }
};
