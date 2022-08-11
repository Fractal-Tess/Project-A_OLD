<script lang="ts">
  import Yor from '$lib/components/splash/Yor.svelte';
  import Login from './login/Login.svelte';
  import Register from './register/Register.svelte';
  import WelcomeMessage from './components/WelcomeMessage.svelte';
  import Gradient from '$lib/components/gradient/ContainerWrapper.svelte';
  import Recovery from './recover/Recover.svelte';
  import type { State } from '$types';

  let authState: State = 'login';

  const changeRoute = {
    login: () => {
      authState = 'login';
    },
    register: () => {
      authState = 'register';
    },
    recovery: () => {
      authState = 'recovery';
    }
  };
</script>

<div class="flex flex-col h-full">
  <WelcomeMessage />
  <div class="my-auto flex justify-center items-center mt-8">
    <Gradient width="w-[1250px] max-w-[80%] min-w-[1000px]" height="h-[600px]">
      <div class="flex-1">
        <Yor />
      </div>
      <div class="flex-1 text-2xl font-bold">
        {#if authState === 'login'}
          <Login
            gotoRegister={changeRoute.register}
            gotoRecovery={changeRoute.recovery}
          />
        {:else if authState === 'register'}
          <Register gotoLogin={changeRoute.login} />
        {:else if authState === 'recovery'}
          <Recovery gotoLogin={changeRoute.login} />
        {:else}
          <h1>This should be unreachable</h1>
        {/if}
      </div>
    </Gradient>
  </div>
</div>
