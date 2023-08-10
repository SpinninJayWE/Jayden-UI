<template>
  <div class="j-tree"></div>
</template>

<script setup lang="ts">
import '../style/index.scss';

const mockData: TreeData = [
  {
    label: '1',
    chidren: [
      {
        label: '1-1'
      }
    ]
  },
  {
    label: '2',
    chidren: [
      {
        label: '2-2'
      }
    ]
  },
  {
    label: '3'
  }
];

type node = {
  label: string;
  chidren?: TreeData;
};
type TreeData = node[];
type TreeProps = {
  treeData: TreeData;
};
defineOptions({
  name: 'j-tree'
});
</script>
