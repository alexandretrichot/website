export default {
	ssr: false,
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Solway:700&display=swap" }
		]
	},
	loading: { color: '#fff' },
	css: [
		'~/assets/scss/main.scss',
		'@fortawesome/fontawesome-svg-core/styles.css'
	],
	plugins: [
		{ src: "~/plugins/cursor.js", ssr: false },
		{ src: "~/plugins/player", ssr: false },
		"~/plugins/fontawesome",
		{ src: "~/plugins/app", ssr: false },
	],
	modules: [
		'@nuxtjs/pwa'
	],
	pageTransition: {
		mode: 'out-in',
		name: "fade"
	},
	build: {
		extend(config, ctx) {
			config.module.rules.push({
				test: /\.(ogg|mp3|wav|mpe?g)$/i,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]'
				}
			})
		}
	}
}
