<script lang="ts">
  import { fly } from 'svelte/transition';
  export let transitionKey: string;
  export let transitionDuration = 500;
  let _class = '';
  export { _class as class };

  export let outX = -15;
  export let inX = 30;
  export let outY = 0;
  export let inY = 0;
</script>

<div class="grid {_class}">
  {#key transitionKey}
    <div
      class="row-end-1 col-end-1"
      in:fly={{
        x: inX,
        y: inY,
        delay: transitionDuration,
        duration: transitionDuration
      }}
      out:fly={{ x: outX, y: outY, duration: transitionDuration }}
    >
      <slot />
    </div>
  {/key}
</div>
