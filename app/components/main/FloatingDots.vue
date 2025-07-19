<script setup lang="ts">
	interface IFloatingCircle {
		top: number
		left: number
		size: number
		duration: number
		delay: number
		hasBorder: boolean
		animation: string
	}

	const animations = ['animate-path1', 'animate-path2', 'animate-path3']

	const circles: IFloatingCircle[] = Array.from({ length: 3 }, () => ({
		top: Math.random() * 100,
		left: Math.random() * 100,
		size: 20 + Math.random() * 250,
		duration: 5 + Math.random() * 10,
		delay: Math.random() * 5,
		hasBorder: Math.random() > 0.2,
		animation: animations[Math.floor(Math.random() * animations.length)] || 'animate-path1',
	}))

	const circleStyle = (circle: IFloatingCircle) => ({
		top: `${circle.top}%`,
		left: `${circle.left}%`,
		width: `${circle.size}px`,
		height: `${circle.size}px`,
		animationDuration: `${circle.duration}s`,
		animationDelay: `${circle.delay}s`,
	})
</script>

<template>
	<div class="absolute inset-0 z-0 overflow-hidden">
		<div
			v-for="(circle, i) in circles"
			:key="i"
			:style="circleStyle(circle)"
			:class="['absolute rounded-full bg-[#C4D0FB] animate-floating opacity-10', circle.animation]"
		>
			<div
				v-if="circle.hasBorder"
				class="absolute top-1/2 left-1/2 transform -translate-1/2 w-180% h-180% inset-[-6px] rounded-full border-3 border-[#C4D0FB]"
			/>
		</div>
	</div>
</template>

<style scoped>
	@keyframes path1 {
		0% {
			transform: translate(0, 0);
		}
		25% {
			transform: translate(30px, -20px);
		}
		50% {
			transform: translate(-30px, 20px);
		}
		75% {
			transform: translate(20px, 30px);
		}
		100% {
			transform: translate(0, 0);
		}
	}
	@keyframes path2 {
		0% {
			transform: translate(0, 0) rotate(0deg);
		}
		33% {
			transform: translate(20px, -25px) rotate(15deg);
		}
		66% {
			transform: translate(-20px, 25px) rotate(-15deg);
		}
		100% {
			transform: translate(0, 0) rotate(0deg);
		}
	}
	@keyframes path3 {
		0% {
			transform: translate(0, 0) scale(1);
		}
		20% {
			transform: translate(-15px, -15px) scale(1.1);
		}
		40% {
			transform: translate(15px, -5px) scale(0.95);
		}
		60% {
			transform: translate(-10px, 10px) scale(1.05);
		}
		80% {
			transform: translate(10px, 5px) scale(1);
		}
		100% {
			transform: translate(0, 0) scale(1);
		}
	}

	.animate-path1 {
		animation: path1 infinite ease-in-out;
	}
	.animate-path2 {
		animation: path2 infinite ease-in-out;
	}
	.animate-path3 {
		animation: path3 infinite ease-in-out;
	}
</style>
