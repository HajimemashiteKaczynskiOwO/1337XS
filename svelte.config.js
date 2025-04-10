import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';


/** @type {import('@sveltejs/kit').Config} */
const mdsvexConfig = {
	extensions: ['.svx'],
	layout: {
	  blog: './src/routes/devblog/PostLayout.svelte'
	},
	remarkPlugins: [],
	rehypePlugins: []
  };
const config = {
	extensions: ['.svelte'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex()],
	extensions: ['.svelte', '.svx'],
	
	vitePlugin: {
		inspector: true,
	},
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: '404.html'
		}),
	}
};
export default config;