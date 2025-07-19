<script lang="ts" setup>
	import UiButton from '~/components/ui/buttons/UiButton.vue'
	import BannerSlider from '~/components/ui/slider/BannerSlider.vue'

	definePageMeta({
		layout: 'game-layout',
	})

	const slides = computed(() => {
		return [
			{ id: 0, src: '/images/card.png', alt: '' },
			{ id: 1, src: '/images/card.png', alt: '' },
			{ id: 2, src: '/images/card.png', alt: '' },
			{ id: 3, src: '/images/card.png', alt: '' },
			{ id: 4, src: '/images/card.png', alt: '' },
		]
	})
</script>

<template>
	<div class="container">
		<BannerSlider :slides="slides" />
		<UiButton
			:tag="'NuxtLink'"
			:to="'/battle'"
			class="mx-auto w-full max-w-327px h-92px mt-5vh px-58px gap-30px text-(36px) font-medium leading-[1.5]"
		>
			<template #append>
				<Icon name="my-icons:battle" class="w-49px h-49px" />
			</template>
			<template #default>
				{{ 'БАТТЛ' }}
			</template>
		</UiButton>
		<UiButton
			:tag="'NuxtLink'"
			:to="'/selective'"
			class="mx-auto w-full max-w-260px h-74px mt-12px px-40px gap-30px rounded-15px text-(16px) font-medium leading-[1.5]"
		>
			<template #append>
				<Icon name="my-icons:block-select" class="w-28px h-28px" />
			</template>
			<template #default>
				{{ 'ВЫБОРОЧНОЕ' }}
			</template>
		</UiButton>
	</div>
</template>
