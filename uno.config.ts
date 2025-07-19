import { defineConfig, presetWind3, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
	shortcuts: [
		{
			container: 'w-full max-w-580px box-border px-14px mx-auto',
		},
	],
	safelist: [],
	content: {
		pipeline: {
			include: [
				/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
				// '**/*.{js,ts}'
			],
		},
	},
	extendTheme: theme => {
		return {
			...theme,
			breakpoints: {
				xs: '440px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
				'3xl': '1920px',
			},
			colors: {
				...theme.colors,
				mainBg: '#008431',
				secondary: '#00564F',
			},
			fontFamily: {
				rubik: 'Rubik',
				graphic: 'Graphic',
			},
			leading: {},
			backgroundImage: {},
			boxShadow: {
				...theme.boxShadow,
			},
			fontSize: {},
			corePlugins: {
				backgroundOpacity: false,
			},
		}
	},
	presets: [
		presetWind3(), // Core preset with Tailwind-style utilities
	],
	transformers: [
		transformerDirectives(), // Enables @apply, @screen etc.
		transformerVariantGroup(), // Enables (hover: underline blue-100) syntax
	],
})
