<script lang="ts" setup>
	import { ref } from 'vue'

	import type { IAnsweredData } from '../types'

	interface Option {
		value: string
		correct: boolean
	}

	interface QuestionData {
		id: string | number
		question: string
		options: Option[]
	}

	const props = defineProps<{
		data: QuestionData
	}>()

	const emit = defineEmits<{
		(e: 'answered', payload: IAnsweredData): void
	}>()

	const selected = ref<string | null>(null)
	const isAnswered = ref(false)

	function selectOption(option: Option) {
		if (isAnswered.value) return
		selected.value = option.value
		isAnswered.value = true

		setTimeout(() => {
			emit('answered', { id: props.data.id, correct: option.correct })
		}, 500)
	}

	function isCorrect(option: Option) {
		return isAnswered.value && option.correct
	}

	function isIncorrect(option: Option) {
		return isAnswered.value && selected.value === option.value && !option.correct
	}
</script>

<template>
	<div class="p-4 text-black space-y-4">
		<div class="italic text-[#333333]">{{ 'Дұрыс жауапты таңданыз' }}</div>
		<h2 class="text-20px font-semibold">
			{{ data.question }}
		</h2>
		<div class="space-y-4">
			<button
				v-for="option in data.options"
				:key="option.value"
				:class="{
					'border-green-500 bg-green-100': isCorrect(option),
					'border-red-500 bg-red-100': isIncorrect(option),
					'border-gray-300 hover:bg-gray-100': !isCorrect(option) && !isIncorrect(option),
				}"
				class="w-full text-left px-4 py-2 border rounded-35px cursor-pointer transition-colors duration-300"
				@click="selectOption(option)"
			>
				{{ option.value }}
			</button>
		</div>
	</div>
</template>
