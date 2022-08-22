<script lang="ts">
  import { fade } from 'svelte/transition';
  export let transitionKey: string;
  export let transitionDuration = 500;
  let _class = '';
  export { _class as class };
</script>

<div class="grid {_class}">
  {#key transitionKey}
    <div
      class="row-end-1 col-end-1"
      in:fade={{
        duration: transitionDuration,
        delay: transitionDuration
      }}
      out:fade={{ duration: transitionDuration }}
    >
      <slot />
    </div>
  {/key}
</div>
