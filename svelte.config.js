import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { svelte } from '@sveltejs/vite-plugin-svelte';

const config = {
  // ...
  onwarn: (warning, handler) => {
    if (warning.code === 'a11y-click-events-have-key-events') return
    handler(warning)
  },
}

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
}
