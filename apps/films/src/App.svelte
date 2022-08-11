<script lang="ts">
  import Offline from '$lib/components/offline/Offline.svelte';
  import ThemeWrapper from '$lib/components/theme/ThemeWrapper.svelte';
  import TopBar from '$lib/components/topbar/TopBar.svelte';
  import Online from '$lib/components/online/Online.svelte';
  import { isServerOnlineStore } from '$stores/serverStatus';
</script>

<ThemeWrapper>
  <TopBar />
  {#if $isServerOnlineStore}
    <Online />
  {:else}
    <Offline />
  {/if}
</ThemeWrapper>
