<script lang="ts">
  import { loginStore } from '$stores/login';
  import InputGroup from '$lib/components/input/AuthInputGroup.svelte';
  export let gotoRegister: () => void;
  export let gotoRecovery: () => void;
</script>

<div class="h-full flex flex-col items-center justify-center">
  <!-- Login heading -->
  <h1 class="text-3xl mb-8">Login</h1>

  <form class="form-control text-center">
    <!-- Username/Email -->
    <InputGroup
      displayErr={$loginStore.showErrors &&
        !!$loginStore.validationErrs.fieldErrors.usernameOrEmail}
      isValid={!$loginStore.validationErrs.fieldErrors.usernameOrEmail}
      errLabel={$loginStore.validationErrs.fieldErrors.usernameOrEmail &&
        $loginStore.validationErrs.fieldErrors.usernameOrEmail[0]}
      normalLabel="Username/Email"
      target="username_email"
      inputType="text"
      placeholder="Email or username"
      bind:valueBind={$loginStore.data.usernameOrEmail}
    />

    <!-- Password -->
    <InputGroup
      displayErr={$loginStore.showErrors &&
        !!$loginStore.validationErrs.fieldErrors.password}
      isValid={!$loginStore.validationErrs.fieldErrors.password}
      errLabel={$loginStore.validationErrs.fieldErrors.password &&
        $loginStore.validationErrs.fieldErrors.password[0]}
      normalLabel="Password"
      target="password"
      inputType="password"
      placeholder="Password"
      bind:valueBind={$loginStore.data.password}
    />

    <!-- Recover account -->
    <label class="label label-text-alt">
      <button
        type="button"
        on:click|preventDefault={gotoRecovery}
        class="label-text-alt"
      >
        <span
          class="text-secondary underline underline-offset-2 decoration-secondary cursor-pointer"
          >Forgot your password?</span
        >
      </button>
    </label>

    <!-- Recover account -->
    <button
      on:click|preventDefault={loginStore.submit}
      type="submit"
      class="{$loginStore.isValid
        ? ''
        : 'btn-ghost btn-outline'} btn btn-secondary mt-8">Login</button
    >
    <label class="label label-text-alt">
      Don't have an account?
      <button
        on:click|preventDefault={gotoRegister}
        class="label-text-alt cursor-default"
      >
        <span
          class="ml-2 text-secondary underline underline-offset-2 decoration-secondary cursor-pointer"
          >Create one</span
        >
      </button>
    </label>
  </form>
</div>
