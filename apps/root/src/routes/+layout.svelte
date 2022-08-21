<script lang="ts">
  import '$styles';
  import { browser } from '$app/env';
  import Header from '@package/ui/components/Headers/Header.svelte';
  import type { LayoutLoadData } from './+layout.server';
  import { createThemeStore } from '@package/common/theme/stores/theme';

  export let data: LayoutLoadData;

  const themeStore = createThemeStore(data.theme);

  $: {
    if (browser) {
      document.documentElement.setAttribute('data-theme', $themeStore);
      document.documentElement.classList.value = $themeStore;
    }
  }
</script>

<div class="font-roboto flex flex-col bg-base-100 text-base-content min-h-screen">
  <Header toggleTheme={themeStore.toggleTheme} />
  <slot />
</div>
