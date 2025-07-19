<script lang="ts" setup>
	import UiButton from '~/components/ui/buttons/UiButton.vue'
	import UiTable from '~/components/ui/layers/UiTable.vue'

	definePageMeta({
		layout: 'game-layout',
	})
</script>

<template>
	<div class="container pt-1vh h-70vh flex flex-col justify-center items-stretch gap-18px">
		<UiButton
			class="mx-auto w-full max-w-290px h-74px mt-12px px-40px gap-30px rounded-15px text-(16px) font-medium leading-[1.5] shrink-0"
		>
			<template #append>
				<Icon name="my-icons:block-select" class="w-28px h-28px shrink-0" />
			</template>
			<template #default>
				<span class="grow text-(16px center)">{{ 'пригласить' }}</span>
			</template>
		</UiButton>
		<UiTable :title="'Список друзей'" class="max-w-290px w-full grow mx-auto" />
	</div>
</template>
