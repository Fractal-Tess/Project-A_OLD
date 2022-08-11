import '$styles';
import '@fortawesome/fontawesome-free/js/all.js';
import '$lib/webtorrent.min.js';
import App from '$src/App.svelte';

const app = new App({
  target: document.getElementById('app')!
});

export default app;
