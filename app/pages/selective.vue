<script lang="ts" setup>
	import UiButton from '~/components/ui/buttons/UiButton.vue'

	definePageMeta({
		layout: 'game-layout',
	})

	const BATTE_TYPE = [
		{
			id: 0,
			title: 'ДРУЗЬЯ',
			subtitle: '',
			link: '/friends',
		},
		{
			id: 1,
			title: 'ЕНТ',
			subtitle: 'соревнование старших классов',
			link: '',
		},
		{
			id: 2,
			title: 'ТУРНИР',
			subtitle: '',
			link: '',
		},
		{
			id: 3,
			title: 'ГРУППА',
			subtitle: 'Игровая группа учителя',
			link: '/group-game-settings',
		},
	]
</script>

<template>
	<div class="container pt-7vh">
		<UiButton
			v-for="type in BATTE_TYPE"
			:key="type.id"
			:tag="'NuxtLink'"
			:to="type.link"
			class="mx-auto w-full max-w-260px h-74px mt-12px px-20px justify-center gap-30px rounded-15px text-(16px) font-medium leading-[1.5] sm:(px-40px justify-start)"
		>
			<template #append>
				<Icon name="my-icons:block-select" class="shrink-0 w-20px h-20px sm:(w-28px h-28px)" />
			</template>
			<template #default>
				<div class="grow text-center">
					<div>{{ type.title }}</div>
					<div class="text-13px font-medium leading-none">{{ type.subtitle }}</div>
				</div>
			</template>
		</UiButton>
	</div>
</template>
