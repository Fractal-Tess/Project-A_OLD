<script lang="ts">
  import WelcomeMessage from '@package/ui/components/Headings/WelcomeMessage.svelte';
  import PageTransition from '@package/ui/components/Transitions/PageTransition.svelte';
  import type { LayoutLoadData } from './+layout.server';

  export let data: LayoutLoadData;

  const pageTransitionDuration = 700;
</script>

<div class="flex flex-col items-center p-8">
  <div class="h-20 my-8">
    <WelcomeMessage />
    <PageTransition refreshContentKey={data.currentHref} {pageTransitionDuration}>
      <slot />
    </PageTransition>
  </div>
</div>
