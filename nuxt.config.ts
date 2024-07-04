export default defineNuxtConfig({
	extends: 'content-wind',

	routeRules: {
		'/': { prerender: true },
	},

	compatibilityDate: '2024-07-04',
	modules: ['@nuxthq/studio', '@nuxt/image'],
});