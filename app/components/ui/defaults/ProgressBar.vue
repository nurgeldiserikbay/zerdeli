<script lang="ts" setup>
	import { computed } from 'vue'

	interface Props {
		max: number
		value: number
		color?: string
		backgroundColor?: string
	}

	const props = withDefaults(defineProps<Props>(), {
		color: '#4ade80', // зелёный по умолчанию
		backgroundColor: '#e5e7eb', // серый по умолчанию
	})

	const percent = computed(() => {
		if (props.max <= 0) return 0
		return Math.min((props.value / props.max) * 100, 100)
	})
</script>

<template>
	<div class="flex items-center gap-3">
		<div class="w-full h-2 rounded overflow-hidden" :style="{ backgroundColor: props.backgroundColor }">
			<div
				class="h-full transition-all duration-500"
				:style="{
					width: percent + '%',
					backgroundColor: props.color,
				}"
			/>
		</div>
		<div class="whitespace-nowrap">{{ value }} / {{ max }}</div>
	</div>
</template>
