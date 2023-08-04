import { provide, ref } from 'vue';
import { CarouselItemProps } from '../src/item.vue';
export type CarouselItemRegister = (item: CarouselItemProps) => void;

export default function useCarouselItems() {
  provide<CarouselItemRegister>('carouselItemRegister', (val) => {
    carouselItems.value.push(val);
  });

  const carouselItems = ref<CarouselItemProps[]>([]);

  return {
    carouselItems
  };
}
