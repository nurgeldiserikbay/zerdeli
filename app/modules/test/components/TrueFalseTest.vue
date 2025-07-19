<script setup lang="ts">
	import { ref, computed, defineEmits, defineProps } from 'vue'

	type TrueFalseData = {
		id: string
		question: string
		correct: boolean
	}

	const props = defineProps<{
		data: TrueFalseData
	}>()

	const emit = defineEmits<{
		(e: 'answered', payload: { id: string; correct: boolean; selected: boolean }): void
	}>()

	const selected = ref<boolean | null>(null)
	const isAnswered = computed(() => selected.value !== null)
	const isCorrect = ref()

	function select(value: boolean) {
		if (isAnswered.value) return
		selected.value = value
		isCorrect.value = value === props.data.correct
		setTimeout(() => {
			emit('answered', {
				id: props.data.id,
				selected: value,
				correct: isCorrect.value,
			})
		}, 500)
	}
</script>

<template>
	<div class="rounded-xl max-w-md mx-auto">
		<div class="italic text-[#333333] mb-2">{{ 'Дұрыс жауаптарды таңданыз' }}</div>
		<div class="flex justify-center my-8 text-unset">
			<Icon v-if="isAnswered && isCorrect" name="my-icons:correct" class="w-80px h-80px" />
			<Icon v-else-if="isAnswered && !isCorrect" name="my-icons:incorrect" class="w-80px h-80px" />
			<Icon v-else name="my-icons:question" class="w-80px h-80px" />
		</div>
		<p class="text-black text-lg font-semibold mb-4">{{ data.question }}</p>

		<div class="flex gap-4">
			<button
				class="flex-1 py-2 px-4 rounded-35px font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 bg-green-500 hover:bg-green-600"
				:disabled="isAnswered"
				@click="select(true)"
			>
				<span>Правда</span>
			</button>

			<button
				class="flex-1 py-2 px-4 rounded-35px font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 bg-red-500 hover:bg-red-600"
				:disabled="isAnswered"
				@click="select(false)"
			>
				<span>Ложь</span>
			</button>
		</div>
	</div>
</template>
