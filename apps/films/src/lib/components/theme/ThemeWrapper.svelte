<script lang="ts">
  import { theme } from '$lib/stores/theme';

  $: {
    document.documentElement.setAttribute('data-theme', $theme);
    document.documentElement.classList.value = $theme;
  }
</script>

{#await theme.load() then}
  <div class="bg-base-300 text-base-content h-screen flex flex-col">
    <slot />
  </div>
{/await}
