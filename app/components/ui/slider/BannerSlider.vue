<script setup lang="ts">
	import type { SwiperContainer } from 'swiper/element/bundle'
	import { register } from 'swiper/element/bundle'

	const $props = withDefaults(
		defineProps<{
			slides: { id: number; src: string; alt?: string }[]
		}>(),
		{}
	)

	const swiperParams = {
		slidesPerView: 1,
		spaceBetween: 10,
		injectStyles: [
			`	:root {
				  --swiper-pagination-bullet-horizontal-gap: 15px;
				}

				.swiper {
					padding-bottom: 28px;
				}

				.swiper-pagination-horizontal {
					bottom: 0px !important;
					display: flex;
					align-items: flex-end;
					justify-content: space-around;
					max-width: 46%;
					margin: 0 auto;
					left: 50% !important;
					transform: translateX(-50%);
				}

				.swiper-pagination-bullet {
					width: 7px;
					height: 7px;
					display: block;
					background: #d9d9d9 !important;
				}

				.swiper-pagination-bullet-active {
					background: #fffa65 !important;
				}
      `,
		],
	}

	const containerRef = useTemplateRef<SwiperContainer>('containerRef')
	const slides = computed(() => $props.slides)

	onMounted(() => {
		register()

		if (containerRef.value) {
			Object.assign(containerRef.value, swiperParams)
			containerRef.value.initialize()
		}
	})

	function onSlideChange() {
		console.log('Slide changed')
	}
</script>

<template>
	<swiper-container ref="containerRef" :loop="true" :autoplay="true" :pagination="{}" :init="false" @swiperslidechange="onSlideChange">
		<swiper-slide v-for="slide in slides" :key="slide.id">
			<div class="relative overflow-hidden w-full aspect-ratio-[2] rounded-[20px]">
				<img :src="slide.src" :alt="slide.alt" class="block w-full h-full object-cover" />
			</div>
		</swiper-slide>
	</swiper-container>
</template>

<style lang="css"></style>
