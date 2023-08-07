import { CardProps } from '../src/index.vue';
import { computed, getCurrentInstance } from 'vue';
export default function useCard(props: CardProps) {
  const visbaledByTitles = computed(() => {
    const res = {
      titleContainer: false,
      title: false,
      subTitle: false
    };

    if (
      props.title ||
      getCurrentInstance()?.slots.title ||
      props.subTitle ||
      getCurrentInstance()?.slots.subtitle
    ) {
      res.titleContainer = true;
    }

    if (props.title || getCurrentInstance()?.slots.title) {
      res.title = true;
    }

    if (props.subTitle || getCurrentInstance()?.slots.subtitle) {
      res.subTitle = true;
    }

    return res;
  });

  return {
    visbaledByTitles
  };
}
