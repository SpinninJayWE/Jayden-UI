<template>
	<Transition name="loading">
		<div v-if="data.isLoading" class="global-loading">
			<div class="inner">
				<div class="item">
					<div class="loading"></div>
				</div>
				<div class="item loading-text">
					{{ data.text }}
				</div>
				<!-- <div @click="close" class="item closer">
                    Cancel
                </div> -->
			</div>
		</div>
	</Transition>
</template>

<script name="LoadingComponent" setup lang="ts">
	import { reactive, watch } from 'vue'

	// Define LoadingOptions interface
	export interface LoadingOptions {
		loading?: boolean
		loadingText?: string
	}

	// Define props with default values
	const props = withDefaults(defineProps<LoadingOptions>(), {
		loading: false,
		loadingText: 'Loading ...',
	})

	// Define reactive state
	const data = reactive({
		isLoading: props.loading,
		text: props.loadingText,
	})

	// Watch for changes in loading and loadingText props and update data accordingly
	watch(
		() => props.loading,
		(val) => {
			data.isLoading = val
		}
	)
	watch(
		() => props.loadingText,
		(val) => {
			data.text = val
		}
	)

	// Function to open loading
	function open() {
		data.isLoading = true
	}

	// Function to close loading
	function close() {
		data.isLoading = false
	}

	// Expose functions and data to parent component
	defineExpose({
		open,
		close,
		data,
	})
</script>
<style lang="scss">
	.global-loading {
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		z-index: 2200;
		background-color: rgba(0, 0, 0, 0.7);
		display: flex;
		align-items: center;
		justify-content: center;

		.inner {
			.item {
				margin: 14px 0;
				text-align: center;
			}

			.loading {
				display: inline-block;
				width: 34px;
				height: 34px;
				border-radius: 50%;
				border: 3px solid #999;
				border-top-color: #ad7139;
				animation: spin 1s ease-in-out infinite;
			}

			@keyframes spin {
				from {
					transform: rotate(0deg);
				}
				to {
					transform: rotate(360deg);
				}
			}

			.loading-text {
				position: relative;
				font-size: 34px;
				font-family: Roboto;
				animation: 1.4s fontColorGradient infinite
					cubic-bezier(0.075, 0.82, 0.165, 1);

				&::after {
					padding-left: 3px;
					content: '';
					position: absolute;
					top: 0;
					bottom: 0;
					animation: 1.4s dotAnimation infinite
						cubic-bezier(0.075, 0.82, 0.165, 1);
				}
			}

			@media (max-width: 420px) {
				.loading-text {
					font-size: 24px;
				}
			}

			.closer {
				color: #fff;
			}
		}
	}

	@keyframes fontColorGradient {
		0% {
			color: rgba($color: #fff, $alpha: 0.3);
		}

		50% {
			color: rgba($color: #fff, $alpha: 1);
		}

		75% {
			color: rgba($color: #fff, $alpha: 0.85);
		}

		100% {
			color: rgba($color: #fff, $alpha: 0.2);
		}
	}

	@keyframes dotAnimation {
		33% {
			content: '.';
			color: rgba($color: #fff, $alpha: 0.1);
		}

		66% {
			content: '..';
			color: rgba($color: #fff, $alpha: 0.66);
		}

		100% {
			content: '...';
			color: rgba($color: #fff, $alpha: 1);
		}
	}

	.loading-enter-active,
	.loading-leave-active {
		transition: all 0.2s cubic-bezier(0.45, 0, 0.55, 1);
	}

	.loading-leave-active {
		transition-delay: 0.1s;
	}

	.loading-enter-from,
	.loading-leave-to {
		opacity: 0;
	}

	.loading-enter-active .inner,
	.loading-leave-active .inner {
		transition: all 0.2s cubic-bezier(0.45, 0, 0.55, 1);
	}

	.loading-enter-from .inner {
		transform: translateX(-60px);
		opacity: 0;
	}

	.loading-leave-to .inner {
		transform: translateX(60px);
		opacity: 0;
	}
</style>
