<script lang="ts" setup>
	import UiButton from '~/components/ui/buttons/UiButton.vue'

	definePageMeta({
		layout: 'game-layout',
	})
</script>

<template>
	<div class="container pt-7vh">
		<UiButton
			:tag="'NuxtLink'"
			:to="''"
			class="mx-auto w-full max-w-260px h-74px mt-12px px-40px gap-30px rounded-15px text-(16px) font-medium leading-[1.5]"
		>
			<template #append>
				<Icon name="my-icons:block-select" class="w-28px h-28px shrink-0" />
			</template>
			<template #default>
				<span class="grow text-(16px center)">{{ 'создать' }}</span>
			</template>
		</UiButton>
		<UiButton
			:tag="'NuxtLink'"
			:to="'/group-waiting-room'"
			class="mx-auto w-full max-w-260px h-74px mt-8 px-40px gap-30px rounded-15px text-(16px) font-medium leading-[1.5]"
		>
			<template #append>
				<Icon name="my-icons:block-select" class="w-28px h-28px shrink-0" />
			</template>
			<template #default>
				<span class="grow text-(16px center)">{{ 'присоединится' }}</span>
			</template>
		</UiButton>
	</div>
</template>
