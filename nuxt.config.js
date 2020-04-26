
export default {
	mode: 'spa',
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	loading: { color: '#fff' },
	css: [
	],
	plugins: [
		"~/plugins/Anime.js"
	],
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'@nuxtjs/style-resources',
	],
	styleResources: {
		scss: [
			'./assets/scss/_vars.scss',
			'./assets/scss/main.scss'
		]
	},
	pageTransition: {
		name: "fade"
	}
}
