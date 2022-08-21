<script lang="ts">
  export let background = 'bg-base-200';
  //TODO: Add animate-gradient-animation-x to the outer div for animation
  // This is currently not enabled because responsivly doesn't like it - makes my cpu hurt
</script>

<div
  class="rounded-2xl p-1 bg-gradient-to-r from-secondary  via-primary to-secondary 
  background bg-base-100 shadow-2xl bg-300 h-full w-full"
>
  <div class="rounded-2xl h-full w-full {background} overflow-hidden">
    <slot />
  </div>
</div>
