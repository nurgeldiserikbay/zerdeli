<script lang="ts" setup>
	import MainNav from '~/components/main/MainNav.vue'
</script>

<template>
	<div class="min-h-full h-screen pb-73px">
		<slot />
		<MainNav class="fixed bottom-0 left-0 z-50 w-full" />
	</div>
</template>
