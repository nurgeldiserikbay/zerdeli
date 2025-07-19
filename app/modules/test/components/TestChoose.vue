<script lang="ts" setup>
	import ProgressBar from '~/components/ui/defaults/ProgressBar.vue'

	import type { IAnsweredData, IQuestion } from '../types'

	import SingleTest from './SingleTest.vue'
	import MultipleTest from './MultipleTest.vue'
	import TrueFalseTest from './TrueFalseTest.vue'
	import OrderingTest from './OrderingTest.vue'

	defineProps<{
		round: number
		answer: IAnsweredData[]
		question: IQuestion
		questions: IQuestion[]
	}>()

	const emit = defineEmits<{
		(e: 'answered', payload: { id: string | number; correct: boolean }): void
	}>()

	const TEST: { [key: string]: Component } = {
		single: SingleTest,
		multiple: MultipleTest,
		truefalse: TrueFalseTest,
		ordering: OrderingTest,
	}
</script>

<template>
	<div class="h-full w-full flex flex-col items-stretch justify-start gap-8 pt-10 pb-14 box-border">
		<div class="flex justify-between items-center gap-6 text-(16px white) font-medium">
			<div class="flex gap-2">
				<span>{{ 'Раунд:' }}</span>
				<span>{{ round }}</span>
			</div>
			<div class="grow">
				<ProgressBar :value="answer.length" :max="questions.length" />
			</div>
		</div>
		<div class="bg-[#FFFFFF] p-16px pt-24px rounded-24px pb-10">
			<component :is="TEST[question.type]" :data="question.data" @answered="emit('answered', $event)" />
		</div>
	</div>
</template>
