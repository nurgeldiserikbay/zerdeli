<script lang="ts" setup>
	import TestChoose from '~/modules/test/components/TestChoose.vue'
	import ResultBoard from '~/modules/test/components/ResultBoard.vue'

	import type { IAnsweredData, IQuestion } from '~/modules/test/types'

	interface ITheme {
		id: number
		title: string
		icon: string
	}

	const THEMES: ITheme[] = [
		{ id: 0, title: 'Химия', icon: '' },
		{ id: 1, title: 'Физика', icon: '' },
		{ id: 2, title: 'Математика', icon: '' },
		{ id: 3, title: 'География', icon: '' },
		{ id: 4, title: 'Биология', icon: '' },
		{ id: 5, title: 'Өзің-өзі тану', icon: '' },
	]
	const QUESTIONS: IQuestion[] = [
		// {
		// 	id: 0,
		// 	type: 'single',
		// 	data: {
		// 		id: 1,
		// 		question: 'What is 2 + 2?',
		// 		options: [
		// 			{ value: '3', correct: false },
		// 			{ value: '4', correct: true },
		// 			{ value: '5', correct: false },
		// 			{ value: '22', correct: false },
		// 		],
		// 	},
		// },
		// {
		// 	id: 1,
		// 	type: 'multiple',
		// 	data: {
		// 		id: 'q2',
		// 		question: 'Выбери все чётные числа',
		// 		options: [
		// 			{ value: '1', correct: false },
		// 			{ value: '2', correct: true },
		// 			{ value: '3', correct: false },
		// 			{ value: '4', correct: true },
		// 		],
		// 	},
		// },
		{
			id: 2,
			type: 'truefalse',
			data: {
				id: 'q3',
				question: 'Казахстан находится в Центральной Азии?',
				correct: true,
			},
		},
		// { id: 3, type: 'ordering', data: {} },
		// {
		// 	id: 4,
		// 	type: 'single',
		// 	data: {
		// 		id: 1,
		// 		question: 'What is 3 + 3?',
		// 		options: [
		// 			{ value: '3', correct: false },
		// 			{ value: '6', correct: true },
		// 			{ value: '5', correct: false },
		// 			{ value: '22', correct: false },
		// 		],
		// 	},
		// },
		// {
		// 	id: 5,
		// 	type: 'single',
		// 	data: {
		// 		id: 1,
		// 		question: 'What is 4 + 4?',
		// 		options: [
		// 			{ value: '3', correct: false },
		// 			{ value: '8', correct: true },
		// 			{ value: '5', correct: false },
		// 			{ value: '22', correct: false },
		// 		],
		// 	},
		// },
		// {
		// 	id: 6,
		// 	type: 'multiple',
		// 	data: {
		// 		id: 'q2',
		// 		question: 'Выбери все чётные числа',
		// 		options: [
		// 			{ value: '1', correct: false },
		// 			{ value: '10', correct: true },
		// 			{ value: '3', correct: false },
		// 			{ value: '12', correct: true },
		// 		],
		// 	},
		// },
		// {
		// 	id: 7,
		// 	type: 'multiple',
		// 	data: {
		// 		id: 'q2',
		// 		question: 'Выбери все чётные числа',
		// 		options: [
		// 			{ value: '1', correct: false },
		// 			{ value: '8', correct: true },
		// 			{ value: '3', correct: false },
		// 			{ value: '6', correct: true },
		// 		],
		// 	},
		// },
		{
			id: 9,
			type: 'truefalse',
			data: {
				id: 'q3',
				question: 'Казахстан находится в Центральной Азии 2?',
				correct: false,
			},
		},
		{
			id: 10,
			type: 'truefalse',
			data: {
				id: 'q3',
				question: 'Казахстан находится в Центральной Азии 3?',
				correct: true,
			},
		},
	]
	const players = [
		{ id: 'p1', name: 'Alice', avatar: 'https://i.pravatar.cc/100?u=p1' },
		{ id: 'p2', name: 'Charlie', avatar: 'https://i.pravatar.cc/100?u=p3' },
	]
	const rounds = [
		{
			topic: 'Science',
			answers: {
				p1: [true, false, null],
				p2: [true, false, true],
			},
		},
		{
			topic: null, // тема не выбрана
			answers: {
				p1: [null, null, null],
				p2: [null, null, null],
			},
		},
	]
	const state = ref<'category' | 'game' | 'result'>('category')
	const round = ref(0)
	const themes = ref<ITheme[]>()
	async function fetchTheme() {
		try {
			themes.value = new Array(3).fill(0).map((_, ind, arr) => {
				let theme = THEMES[Math.floor(Math.random() * THEMES.length)]
				while (!theme || arr.find(t => t.id === theme?.id)) {
					theme = THEMES[Math.floor(Math.random() * THEMES.length)]
				}
				return theme
			})
		} catch (error) {
			console.log(error)
		}
	}
	watch(
		state,
		() => {
			if (state.value === 'category') fetchTheme()
		},
		{
			immediate: true,
		}
	)
	const questions = ref<IQuestion[]>()
	const answers = ref<IAnsweredData[]>([])
	const getQuestion = computed(() => {
		return questions.value?.[answers.value.length]
	})
	async function selectTheme(theme: ITheme) {
		try {
			console.log(`theme ${theme}`)
			questions.value = new Array(3).fill(0).map((_, ind, arr) => {
				let question = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)]
				while (!question || arr.find(t => t.id === question?.id)) {
					question = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)]
				}
				return question
			})
			state.value = 'game'
		} catch (error) {
			console.log(error)
		}
	}
	async function answered(answer: IAnsweredData) {
		answers.value.push(answer)
		console.log('s', answers.value)
		if (answers.value.length === 3) {
			state.value = 'result'
		}
	}
</script>

<template>
	<div class="container min-h-screen flex items-stretch">
		<div v-if="state === 'category'" class="w-full flex flex-col items-center justify-center gap-3">
			<button
				v-for="theme in themes"
				:key="theme.id"
				class="py-4 px-6 text-(white center) uppercase bg-secondary rounded-3 cursor-pointer hover:bg-secondary/90 active:bg-secondary/90"
				@click="selectTheme(theme)"
			>
				<span>{{ theme?.title }}</span>
			</button>
		</div>
		<div v-else-if="state === 'game'" class="w-full flex flex-col items-center justify-center gap-3">
			<TestChoose
				v-if="getQuestion && questions"
				:key="answers.length"
				:round="round"
				:questions="questions"
				:answer="answers"
				:question="getQuestion"
				@answered="answered"
			/>
		</div>
		<div v-else-if="state === 'result'" class="w-full flex flex-col items-center justify-center gap-3">
			<ResultBoard :players="players" :rounds="rounds" />
		</div>
	</div>
</template>
