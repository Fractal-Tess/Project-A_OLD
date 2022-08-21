<script lang="ts">
  export let gradient = 'bg-gradient-to-r from-secondary  via-primary to-secondary';
  export let animateGradientX = true;
  export let padding = 'p-1';
  export let width = 'w-3/4';
  export let rounded = 'rounded-2xl';
  export let height = 'h-[800px]';
</script>

<div
  class="{rounded} {height} {gradient} {padding} {width}  
     {animateGradientX ? 'animate-gradient-animation-x' : ''}  bg-base-100 shadow-2xl bg-300"
>
  <div class="flex {rounded} shadow-xl  bg-base-300 h-full ">
    <slot />
  </div>
</div>

<!-- <div
  class="flex rounded-2xl shadow-2xl p-1 bg-base-100 w-3/4 bg-300 animate-gradient-animation-x
    dark:bg-gradient-to-r dark:from-white  dark:via-black dark:to-white
    bg-gradient-to-r from-black via-white to-black
    translate-bg-x"
>
  <div class="flex rounded-2xl shadow-xl bg-base-300">
    <slot />
  </div>
</div> -->
