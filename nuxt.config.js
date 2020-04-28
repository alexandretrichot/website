
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
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Solway:700&display=swap"}
		]
	},
	loading: { color: '#fff' },
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
			'~/assets/scss/_vars.scss',
		]
	},
	css: [
		'~/assets/scss/main.scss',
		'~/assets/scss/editor.scss',
	],
	axios: {
	},
	pageTransition: {
		name: "fade"
	}
}
