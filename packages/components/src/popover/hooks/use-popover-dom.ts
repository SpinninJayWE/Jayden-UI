import { PopoverProps } from '../src/popover.vue';
import { computed, Ref, StyleValue } from 'vue';

const popoverDefaultOffset = 10;

export default function usePopoverDom(props: PopoverProps) {
  const popoverContentStyles = computed(() => {
    const res: StyleValue = {};
    if (props.width) {
      res.width = props.width + 'px';
    }
    const placement = props.placement;
    const marginOffset = popoverDefaultOffset + 'px';
    if (placement === 'left') {
      res.paddingRight = marginOffset;
    } else if (placement === 'right') {
      res.paddingLeft = marginOffset;
    } else if (placement === 'top') {
      res.paddingBottom = marginOffset;
    } else if (placement === 'bottom') {
      res.paddingTop = marginOffset;
    }

    return res;
  });
  return {
    popoverContentStyles
  };
}
