function createRipple(e: MouseEvent) {
  const target = e.target as HTMLElement;

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
    el.addEventListener('mousedown', createRipple, true);
  },
  beforeUnmount(el: HTMLElement) {
    el.removeEventListener('mousedown', createRipple, true);
  }
};
