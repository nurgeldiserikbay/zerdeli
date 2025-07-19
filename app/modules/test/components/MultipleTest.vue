<script lang="ts" setup>
	import { ref } from 'vue'

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
		(e: 'answered', payload: { id: string | number; correct: boolean }): void
	}>()

	const selected = ref<Set<string>>(new Set())
	const isSubmitted = ref(false)

	function toggleSelection(optionValue: string) {
		if (isSubmitted.value) return
		if (selected.value.has(optionValue)) {
			selected.value.delete(optionValue)
		} else {
			selected.value.add(optionValue)
		}
	}

	function submit() {
		if (isSubmitted.value || selected.value.size === 0) return
		isSubmitted.value = true

		const correctAnswers = props.data.options.filter(o => o.correct).map(o => o.value)
		const selectedArray = Array.from(selected.value)

		const isCorrect = selectedArray.length === correctAnswers.length && selectedArray.every(val => correctAnswers.includes(val))

		setTimeout(() => {
			emit('answered', { id: props.data.id, correct: isCorrect })
		}, 500)
	}

	function isCorrectOption(option: Option) {
		return isSubmitted.value && option.correct
	}

	function isIncorrectOption(option: Option) {
		return isSubmitted.value && selected.value.has(option.value) && !option.correct
	}
</script>

<template>
	<div class="p-4 text-black space-y-4">
		<div class="italic text-[#333333]">{{ 'Дұрыс жауаптарды таңданыз' }}</div>
		<h2 class="text-20px font-semibold">{{ data.question }}</h2>
		<div class="space-y-2">
			<button
				v-for="option in data.options"
				:key="option.value"
				class="w-full text-left px-4 py-2 border rounded-35px cursor-pointer transition-colors duration-300"
				:class="{
					'border-green-500 bg-green-100': isCorrectOption(option),
					'border-red-500 bg-red-100': isIncorrectOption(option),
					'border-blue-400 bg-blue-50': selected.has(option.value) && !isSubmitted,
					'border-gray-300 hover:bg-gray-100': !selected.has(option.value) && !isSubmitted,
				}"
				@click="toggleSelection(option.value)"
			>
				{{ option.value }}
			</button>
		</div>
		<div class="flex justify-center mt-5">
			<button
				class="mt-4 px-8 py-2 text-20px rounded-xl font-semibold shadow-lg transition-all duration-300 bg-gradient-to-r from-green-500 to-lime-500 text-white hover:from-green-600 hover:to-lime-600 focus:outline-none focus:ring-4 focus:ring-lime-300"
				@click="submit"
			>
				Submit
			</button>
		</div>
	</div>
</template>
