<script setup lang="ts">
	import UiButton from '~/components/ui/buttons/UiButton.vue'

	interface Player {
		id: string
		name: string
		avatar: string
	}

	interface Round {
		topic: string | null
		answers: Record<string, (boolean | null)[]>
	}

	defineProps<{
		players: Player[]
		rounds: Round[]
		isEnd: boolean
	}>()

	const $emits = defineEmits(['next'])
</script>

<template>
	<div class="bg-white p-6 rounded-2xl shadow-md w-full mt-8 mx-auto">
		<div class="grid grid-cols-2 gap-8 items-end border-b pb-4 mb-6">
			<div v-for="player in players" :key="player.id" class="text-center">
				<img :src="player.avatar" class="w-16 h-16 rounded-full mx-auto mb-2" />
				<p class="font-semibold text-gray-800">{{ player.name }}</p>
			</div>
		</div>

		<div v-for="(round, index) in rounds" :key="index" class="mb-4">
			<div class="text-center mb-2 text-gray-600 font-semibold">
				{{ `Раунд ${index + 1} ${round.topic ? `(${round.topic})` : '-'}` }}
			</div>
			<div class="grid grid-cols-2 gap-8">
				<div v-for="player in players" :key="player.id" class="flex justify-center gap-2">
					<div
						v-for="(answer, i) in round.answers[player.id] || []"
						:key="i"
						class="w-5 h-5 rounded-full"
						:class="{
							'bg-green-500': answer === true,
							'bg-red-500': answer === false,
							'bg-gray-300': answer === null || answer === undefined,
						}"
					/>
				</div>
			</div>
		</div>
	</div>

	<UiButton
		:tag="'button'"
		class="mx-auto w-full max-w-260px h-74px mt-12px px-20px justify-center gap-30px rounded-15px text-(16px) font-medium leading-[1.5] sm:(px-40px justify-start)"
		@click="$emits('next')"
	>
		<template #append>
			<Icon name="my-icons:block-select" class="shrink-0 w-20px h-20px sm:(w-28px h-28px)" />
		</template>
		<template #default>
			<span class="text-(16px center)">{{ isEnd ? 'Выйти' : 'Следующий раунд' }}</span>
		</template>
	</UiButton>
</template>
