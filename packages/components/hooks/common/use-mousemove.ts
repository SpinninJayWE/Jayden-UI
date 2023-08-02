import { Ref, onMounted, onUnmounted, ref } from 'vue';

type MouseEventFunc = (e: MouseEvent, fromTraget?: HTMLElement) => void;
type MousemoveEvents = {
  moveStart?: MouseEventFunc;
  Moving?: MouseEventFunc;
  moveEnd?: MouseEventFunc;
};

export enum MoveStatus {
  MOVESTART,
  MOVING,
  MOVEEND
}
export default function useMouseMove(
  target: Ref<HTMLElement | undefined> | Ref<HTMLElement | undefined>[],
  { moveStart, Moving, moveEnd }: MousemoveEvents = {}
) {
  const moveStatus = ref<MoveStatus>(0);
  function handleMouseDown(e: MouseEvent) {
    moveStatus.value = 0;
    moveStart && moveStart(e);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.onselectstart = () => false;
  }

  function handleMouseMove(e: MouseEvent) {
    moveStatus.value = 1;
    Moving && Moving(e);
  }

  function handleMouseUp(e: MouseEvent) {
    moveStatus.value = 2;
    moveEnd && moveEnd(e);
    removeAllEventListener();
  }
  function removeAllEventListener() {
    Moving && document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    document.onselectstart = null;
  }

  onMounted(() => {
    if (Array.isArray(target)) {
      target.forEach((item) => {
        if (item.value) {
          item.value.addEventListener('mousedown', handleMouseDown);
        }
      });
    } else {
      const targetDom = target.value;
      if (targetDom) {
        targetDom.addEventListener('mousedown', handleMouseDown);
      }
    }
  });

  onUnmounted(() => {
    if (Array.isArray(target)) {
      target.forEach((item) => {
        if (item.value) {
          item.value.removeEventListener('mousedown', handleMouseDown);
        }
      });
    } else {
      const targetDom = target.value;
      if (targetDom) {
        targetDom.removeEventListener('mousedown', handleMouseDown);
      }
    }
    removeAllEventListener();
  });

  return {
    moveStatus
  };
}
