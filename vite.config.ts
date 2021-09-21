import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
	plugins: [
		svgrPlugin(),
	]
});
