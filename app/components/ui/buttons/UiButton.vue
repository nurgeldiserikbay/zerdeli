<script lang="ts" setup>
	withDefaults(
		defineProps<{
			tag?: 'button' | 'NuxtLink'
		}>(),
		{
			tag: 'button',
		}
	)
</script>

<template>
	<button
		v-if="tag === 'button'"
		:style="{ backgroundImage: `url(${'/images/btn-lines.svg'})` }"
		class="overflow-hidden cursor-pointer flex gap-x-4 items-center rounded-20px bg-secondary text-white bg-cover"
	>
		<slot name="append" />
		<slot />
	</button>
	<NuxtLink
		v-else-if="tag === 'NuxtLink'"
		:style="{ backgroundImage: `url(${'/images/btn-lines.svg'})` }"
		class="overflow-hidden cursor-pointer flex gap-x-4 items-center rounded-20px bg-secondary text-white bg-cover"
	>
		<slot name="append" />
		<slot />
	</NuxtLink>
</template>
