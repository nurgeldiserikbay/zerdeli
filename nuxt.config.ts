// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
				compatibilityDate: '2025-07-15',
				imports: {
								scan: false,
				},
				runtimeConfig: {
								public: {},
				},
				css: ['~/assets/styles/main.css'],
				devtools: { enabled: false },
				vue: {
								compilerOptions: {
												isCustomElement: (tag: string) => tag.startsWith('swiper-'),
								},
				},
				modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/scripts', '@unocss/nuxt', 'nuxt-svgo'],
				icon: {
								mode: 'svg',
								customCollections: [
												{
																prefix: 'my-icons',
																dir: './app/assets/my-icons',
												},
								],
				},
})