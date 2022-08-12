<script lang="ts">
  import '$styles';
  import { theme } from '$lib/stores/theme';
  import { browser } from '$app/env';
  import Header from 'ui/web/header/Header.svelte';

  $: {
    if (browser) {
      document.documentElement.setAttribute('data-theme', $theme);
      document.documentElement.classList.value = $theme;
    }
  }
</script>

<div class="flex-1 text-base-content font-roboto">
  <Header />

  <main>
    <slot />
  </main>
  <footer />
</div>
