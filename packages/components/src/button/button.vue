<template>
	<div class="j-button" :class="buttonClass">jay btn</div>
</template>

<script lang="ts" setup>
	import { computed } from 'vue'
	defineOptions({
		name: 'j-button',
	})
	type ButtonProps = {
		type?: string
	}

	const props = defineProps<ButtonProps>()

	const buttonClass = computed(() => {
		return [props.type]
	})
</script>

<style lang="less" scoped>
	@import './style/index.scss';
</style>
