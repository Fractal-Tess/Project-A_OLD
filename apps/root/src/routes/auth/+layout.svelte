<script lang="ts">
  import WelcomeMessage from '@package/ui/components/Headings/WelcomeMessage.svelte';
  import GradientContainer from '@package/ui/components/Containers/GradientContainer.svelte';
  import YorSplash from '@package/ui/components/Splash/Yor.svelte';
  import { authValidityStore } from '@package/common/auth/stores/authValidityStore';
  import SimpleTransition from '@package/ui/components/Transitions/SimpleTransition.svelte';

  import type { LayoutLoadData } from './+layout.server';

  export let data: LayoutLoadData;

  const transitionDuration = 0;
  // TODO: Move the container and splash out of each route into this layout page
</script>

<div class="flex flex-col items-center py-8 md:py-12">
  <div class=" justify-center h-20">
    <WelcomeMessage />
  </div>
  <div class="hero-content max-w-5xl md:pt-20">
    <GradientContainer>
      <div class="flex">
        <div class="w-1/2 hidden md:flex">
          <YorSplash
            backdrop={true}
            backdropColorVariable={$authValidityStore.isValid ? 'p' : 's'}
          />
        </div>
        <SimpleTransition transitionKey={data.currentHref} {transitionDuration} class="flex-1">
          <slot />
        </SimpleTransition>
      </div>
    </GradientContainer>
  </div>
</div>
