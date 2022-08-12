<script lang="ts">
  import '$styles';
  import { theme } from '$lib/stores/theme';
  import { browser } from '$app/env';

  $: {
    if (browser) {
      document.documentElement.setAttribute('data-theme', $theme);
      document.documentElement.classList.value = $theme;
    }
  }
</script>

<main class="bg-base-300 text-base-content h-screen flex flex-col">
  <button on:click={theme.toggleTheme}> change theme </button>
  <slot />
</main>
