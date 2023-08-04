<template>
  <div class="j-table"></div>
</template>

<script setup lang="ts">
import { Column } from './types';
defineOptions({
  name: 'j-table'
});

type TableProps = {
  dataSource: any[];
  columns: Column[];
};
</script>

<style scoped></style>
