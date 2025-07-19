<script lang="ts" setup>
	import GameHeader from '~/components/main/GameHeader.vue'
	import MainNav from '~/components/main/MainNav.vue'
</script>

<template>
	<div class="min-h-full pb-73px">
		<GameHeader class="mb-28px" />
		<slot />
		<MainNav class="fixed bottom-0 left-0 w-full" />
	</div>
</template>
