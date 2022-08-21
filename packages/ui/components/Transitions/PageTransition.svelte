<script lang="ts">
  import { fade } from 'svelte/transition';
  export let refreshContentKey: string;
  export let pageTransitionDuration = 500;
</script>

<div class="grid">
  {#key refreshContentKey}
    <div
      class="row-end-1 col-end-1"
      in:fade={{
        duration: pageTransitionDuration,
        delay: pageTransitionDuration
      }}
      out:fade={{ duration: pageTransitionDuration }}
    >
      <slot />
    </div>
  {/key}
</div>
