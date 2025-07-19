<script lang="ts" setup>
	withDefaults(
		defineProps<{
			title: string
		}>(),
		{}
	)
</script>

<template>
	<div
		:style="{ backgroundImage: `url(${'/images/btn-lines.svg'})` }"
		class="h-full bg-secondary rounded-20px pb-6 bg-no-repeat bg-[position:bottom] flex flex-col justify-start items-stretch"
	>
		<div class="overflow-hidden cursor-pointer flex gap-x-4 items-center text-white h-30px mt-5 mb-6 px-40px gap-30px">
			<Icon name="my-icons:block-select" class="w-28px h-28px shrink-0" />
			<span class="grow text-(16px center)">{{ title }}</span>
		</div>
		<div class="grow overflow-y-auto px-5">
			<slot />
		</div>
	</div>
</template>
