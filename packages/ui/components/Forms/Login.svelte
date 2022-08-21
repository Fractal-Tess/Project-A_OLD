<script lang="ts">
  import { blur } from 'svelte/transition';
  import { expoOut } from 'svelte/easing';
  import YorSplash from '@package/assets/yor.webp';

  import GradientContainer from '../Containers/GraidientContainer.svelte';
  import InputGroup from '../Inputs/InputGroup.svelte';
  import SubmitBtn from '../Buttons/SubmitBtn.svelte';
  import { loginStore } from '@package/common/auth/stores/login';
</script>

<div class="hero-content max-w-5xl md:mt-20">
  <GradientContainer>
    <div class="flex">
      <div class="flex-1 hidden md:flex items-end ">
        <img
          transition:blur={{ easing: expoOut, duration: 500 }}
          src={YorSplash}
          class="aspect-auto transition-all duration-700"
          alt="login splashart"
          style="filter:drop-shadow(5px -5px 5px hsl(var(--{$loginStore.allIsValid ? 'p' : 's'})))"
        />
      </div>

      <div class="flex-1 form-control items-center p-8">
        <h1 class="font-extrabold text-2xl md:text-3xl lg:text-4xl lg:pt-4">Login</h1>
        <form
          on:submit|preventDefault={loginStore.submit}
          class="flex-1 form-control items-center justify-center space-y-2 md:space-y-6 mt-2 w-full"
        >
          <InputGroup
            bind:value={$loginStore.formFields.usernameOrEmail}
            placeholder="Username/Email"
            labelFor="username-email"
            type="text"
            showErrorLabel={$loginStore.showErrors}
            fieldIsValid={!Boolean($loginStore.errors.fieldErrors.usernameOrEmail)}
            errorLabelText={$loginStore.errors.fieldErrors.usernameOrEmail?.[0] ?? ''}
          />

          <InputGroup
            bind:value={$loginStore.formFields.password}
            placeholder="Password"
            labelFor="password"
            type="password"
            showErrorLabel={$loginStore.showErrors}
            fieldIsValid={!Boolean($loginStore.errors.fieldErrors.password)}
            errorLabelText={$loginStore.errors.fieldErrors.password?.[0] ?? ''}
          />
          <SubmitBtn text="Login" isValid={$loginStore.allIsValid} />
        </form>
      </div>
    </div>
  </GradientContainer>
</div>
