import * as components from './index';
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    JButton: typeof components.Button;
    JIcon: typeof components.Icon;
    JModal: typeof components.Modal;
    JTable: typeof components.Table;
    jInput: typeof components.Input;
    JSelect: typeof components.Select;
    JPopover: typeof components.Popover;
    JMessage: typeof components.Alert;
    JCarousel: typeof components.Carousel;
    JCarouselItem: typeof components.CarouselItem;
  }
}
export {};
