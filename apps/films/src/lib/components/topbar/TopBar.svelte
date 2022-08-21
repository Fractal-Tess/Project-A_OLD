<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import ThemeToggleIcon from '$lib/components/theme/ThemeToggleIcon.svelte';
</script>

<div data-tauri-drag-region class="h-12 flex items-center">
  <button on:click={theme.toggleTheme} class="hover:text-secondary ml-2" aria-live="polite">
    <ThemeToggleIcon cssClass={'w-8'} />
  </button>

  <slot />
</div>
