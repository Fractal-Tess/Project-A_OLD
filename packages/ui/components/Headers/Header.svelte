<script lang="ts">
  import Logo from '../Logos/HeaderLogo.svelte'
  import ThemeToggle from '../Themes/ThemeToggle.svelte'
  
  export let logoBreakpoint = '768px';
  export let toggleTheme: () => void;
  const user = false;
</script>

<header
  class="shadow-md bg-base-200 h-12 md:h-16 lg:h-20 flex items-center justify-between px-4 py-2"
>
  <a href="/" class="h-full">
    <Logo {logoBreakpoint} />
  </a>
  <div class="h-full flex  items-center space-x-4">
    {#if user}
      <div>User component</div>
    {:else}
      <a href="/auth/login" class=" shadow-lg btn-outline btn btn-sm ">Login</a>
      <a href="/auth/register" class=" shadow-lg btn-outline btn btn-sm ">Register</a>
    {/if}

    <ThemeToggle onClick={toggleTheme} />
  </div>
</header>
