<script lang="ts">
  import { registerStore } from '$stores/register';
  import Label from '$lib/components/input/AuthInputGroup.svelte';
  export let gotoLogin: () => void;
</script>

<div class="h-full flex flex-col items-center justify-center">
  <!-- Register heading -->
  <h1 class="text-3xl mb-8">Register</h1>

  <form class="form-control">
    <!-- Email -->
    <Label
      displayErr={$registerStore.showErrs && $registerStore.err.email.hasErr}
      errLabel={$registerStore.err.email.message}
      normalLabel="Email"
      target="email"
      inputType="email"
      placeholder="Email"
      bind:valueBind={$registerStore.reg.email}
      isValid={!$registerStore.err.email.hasErr}
    />

    <!-- Username -->
    <Label
      displayErr={$registerStore.showErrs && $registerStore.err.username.hasErr}
      errLabel={$registerStore.err.username.message}
      normalLabel="Username"
      target="username"
      inputType="text"
      placeholder="Username"
      bind:valueBind={$registerStore.reg.username}
      isValid={!$registerStore.err.username.hasErr}
    />

    <!-- password -->
    <Label
      displayErr={$registerStore.showErrs && $registerStore.err.password.hasErr}
      errLabel={$registerStore.err.password.message}
      normalLabel="Password"
      target="password"
      inputType="password"
      placeholder="Password"
      bind:valueBind={$registerStore.reg.password}
      isValid={!$registerStore.err.password.hasErr}
    />

    <!-- confirm password -->
    <Label
      displayErr={$registerStore.showErrs &&
        $registerStore.err.confirmPassword.hasErr}
      errLabel={$registerStore.err.confirmPassword.message}
      normalLabel="Confrim password"
      target="confirmPassword"
      inputType="password"
      placeholder="Confirm password"
      bind:valueBind={$registerStore.reg.confirmPassword}
      isValid={!$registerStore.err.confirmPassword.hasErr}
    />

    <!-- Register button -->
    <button
      on:click|preventDefault={registerStore.submit}
      on:mouseover={registerStore.showErrs}
      on:focus={registerStore.showErrs}
      type="submit"
      class="{$registerStore.isValid
        ? ''
        : 'glass btn-ghost'} {$registerStore.submitInProgress
        ? 'loading'
        : ''} btn btn-primary mt-8">Register</button
    >
    <!-- Already got an account switch link -->
    <label class="label label-text-alt">
      Already have an account?
      <button
        on:click|preventDefault={gotoLogin}
        class="label-text-alt cursor-default"
      >
        <span
          class="ml-2 text-secondary underline underline-offset-2 decoration-secondary cursor-pointer"
          >Login here</span
        >
      </button>
    </label>
  </form>
</div>
