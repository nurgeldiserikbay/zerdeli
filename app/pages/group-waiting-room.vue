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
			class="mx-auto w-full max-w-290px h-74px mb-6 px-40px gap-30px rounded-15px text-(16px) font-medium leading-[1.5]"
		>
			<template #append>
				<Icon name="my-icons:block-select" class="w-28px h-28px shrink-0" />
			</template>
			<template #default>
				<span class="grow text-(16px center)">{{ '16В8' }}</span>
			</template>
		</UiButton>
		<div
			:style="{ backgroundImage: `url(${'/images/btn-lines.svg'})` }"
			class="h-full max-w-290px mx-auto bg-secondary rounded-20px text-white py-2 pb-6 bg-no-repeat bg-[position:bottom] flex flex-col justify-start items-stretch"
		>
			<div class="grow overflow-y-auto px-5">
				<div class="text-(16px center) font-medium mb-2">{{ 'Логика' }}</div>
				<div class="text-(16px center) font-medium mb-2">{{ 'Английский' }}</div>
				<div class="text-(16px center) font-medium mb-2">{{ 'Математика' }}</div>
				<div class="text-(16px center) font-medium mb-2">{{ 'История РК' }}</div>
				<div class="text-(16px center) font-medium mb-2">{{ 'Литература' }}</div>
			</div>
		</div>
		<UiButton
			:tag="'NuxtLink'"
			:to="'/group-waiting-room'"
			class="mx-auto w-full max-w-290px h-74px mt-6 px-40px gap-30px rounded-15px text-(16px) font-medium leading-[1.5]"
		>
			<template #append>
				<Icon name="my-icons:block-select" class="w-28px h-28px shrink-0" />
			</template>
			<template #default>
				<span class="grow text-(16px center)">{{ 'список участников' }}</span>
			</template>
		</UiButton>
		<UiButton
			:tag="'NuxtLink'"
			:to="'/battle'"
			class="mx-auto w-full max-w-290px h-74px mt-6 px-40px gap-30px rounded-15px text-(16px) font-medium leading-[1.5]"
		>
			<template #append>
				<Icon name="my-icons:block-select" class="w-28px h-28px shrink-0" />
			</template>
			<template #default>
				<span class="grow text-(16px center)">{{ 'начать' }}</span>
			</template>
		</UiButton>
	</div>
</template>
