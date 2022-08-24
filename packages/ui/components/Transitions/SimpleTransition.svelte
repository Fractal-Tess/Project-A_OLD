<script lang="ts">
  import { fly } from 'svelte/transition';
  export let transitionKey: string;
  export let transitionDuration = 500;
  let _class = '';
  export { _class as class };
</script>

<div class="grid {_class}">
  {#key transitionKey}
    <div
      class="row-end-1 col-end-1"
      in:fly={{
        x: 30,
        delay: transitionDuration,
        duration: transitionDuration
      }}
      out:fly={{ x: -15, duration: transitionDuration }}
    >
      <slot />
    </div>
  {/key}
</div>
