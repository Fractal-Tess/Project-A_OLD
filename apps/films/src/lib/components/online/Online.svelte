<script lang="ts">
  //Components
  import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
  //Routes
  import Settings from '$lib/routes/Settings.svelte';
  import Home from '$lib/routes/Home.svelte';
  import Auth from '$lib/components/auth/Auth.svelte';
  import { Route } from 'tinro';
  import { userStore } from '$stores/user';
</script>

{#if $userStore.isLoggedIn}
  <Sidebar />
  <nav>
    <a href="/">Home</a>
    <a href="/settings">settings</a>
  </nav>

  <Route path="/"><Home /></Route>
  <Route path="/settings"><Settings /></Route>
{:else}
  <Auth />
{/if}
