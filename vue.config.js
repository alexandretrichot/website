const configureAPI = require('./src/server/configure');

module.exports = {
	runtimeCompiler: true,
	lintOnSave: false,
	devServer: {
		before: configureAPI
	}
}