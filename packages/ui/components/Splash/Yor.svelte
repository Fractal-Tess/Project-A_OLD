<script lang="ts">
  import Yor from '@package/assets/yor.webp';
  export let backdrop = true;
  export let backdropColorVariable = 's';

  import { blur } from 'svelte/transition';
  import { expoOut } from 'svelte/easing';

  let style = '';

  $: {
    style = backdrop
      ? `filter:drop-shadow(5px -5px 5px hsl(var(--${backdropColorVariable})));`
      : '';
  }
</script>

<img
  transition:blur={{ easing: expoOut, duration: 500 }}
  src={Yor}
  class="transition-all duration-700 object-cover object-top"
  alt="login splashart"
  {style}
/>
