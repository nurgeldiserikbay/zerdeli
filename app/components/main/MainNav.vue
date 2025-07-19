<script lang="ts" setup>
	import IconHome from '~/assets/my-icons/home.svg'
	import IconSearch from '~/assets/my-icons/search.svg'
	import IconGraph from '~/assets/my-icons/graph.svg'
	import IconHuman from '~/assets/my-icons/human.svg'

	const $route = useRoute()

	const NAV_LIST = [
		{
			id: 0,
			link: '/',
			icon: IconHome,
			class: '!text-[#cccccc] !hover:text-dark',
			activeClass: '!text-dark',
		},
		{
			id: 1,
			link: '/search',
			icon: IconSearch,
			class: '!stroke-[#cccccc] !stroke-[2px] !hover:stroke-dark',
			activeClass: '!stroke-dark',
		},
		{
			id: 5,
			icon: '',
		},
		{
			id: 2,
			link: '/graph',
			icon: IconGraph,
			class: 'stroke-[#cccccc] stroke-[2px] hover:stroke-dark',
			activeClass: 'stroke-dark',
		},
		{
			id: 3,
			link: '/teams',
			icon: IconHuman,
			class: 'stroke-[#cccccc] stroke-[2px] hover:stroke-dark',
			activeClass: 'stroke-dark',
		},
	]
</script>

<template>
	<nav class="w-full px-7px box-border">
		<ul
			:style="{ backgroundImage: `url(/images/nav-main.png)`, backgroundSize: '100% 100%' }"
			class="grid h-full grid-cols-5 pb-18px bg-no-repeat"
		>
			<li v-for="nav in NAV_LIST" :key="nav.id">
				<NuxtLink v-if="nav.link" :to="nav.link" class="flex justify-center items-center h-full py-20px">
					<component
						:is="nav.icon"
						:class="{ [nav.activeClass]: $route.path === nav.link, [`${nav.class}`]: true }"
						class="block !w-24px !h-24px transition-300 text-transparent"
					/>
				</NuxtLink>
				<div v-else class="py-20px"><span class="block w-24px h-24px" /></div>
			</li>
		</ul>
	</nav>
</template>
