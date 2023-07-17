import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'j-select',
  setup(props, ctx) {
    const data = ref(0);

    return () => (
      <>
        <div class={'j-select'}>{data.value}</div>
      </>
    );
  }
});
