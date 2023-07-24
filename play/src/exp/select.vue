<template>
  <div class="content-container">
    <h2>Select 下拉框</h2>
    <h3>默认 / 单选</h3>
    <j-select :options="options" v-model:select="select"> </j-select>
    <h3>多选</h3>
    <j-select
      multiple
      style="width: 500px"
      :options="options"
      v-model:select="select2"
    >
    </j-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

function gOptions() {
  const options = [];

  for (let i = 0; i < 10; i++) {
    const option = {
      label: `选项${i + 1}`,
      value: Math.floor(Math.random() * 100),
      disabled: i % 2 === 0
    };
    options.push(option);
  }

  return options;
}
const select = ref('');
const select2 = ref([]);
const options = ref(gOptions());
</script>

<style scoped></style>
