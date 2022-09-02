<script lang="ts">
  import { registerStore } from '$lib/stores/auth/register';

  import InputGroup from '@package/ui/components/Inputs/InputGroup.svelte';
  import SubmitBtn from '@package/ui/components/Buttons/SubmitBtn.svelte';
</script>

<div class="flex-1 form-control items-center p-8 h-full">
  <h1 class="font-extrabold text-2xl md:text-3xl lg:text-4xl lg:pt-4">
    Register
  </h1>

  <form
    on:submit|preventDefault={registerStore.submit}
    class="flex-1 form-control items-center justify-center space-y-2 md:space-y-6 mt-2 w-full"
  >
    <InputGroup
      bind:value={$registerStore.formFields.email}
      placeholder="Email"
      labelFor="email"
      type="email"
      showErrorLabel={$registerStore.showErrors}
      fieldIsValid={!Boolean($registerStore.errors.fieldErrors.email)}
      errorLabelText={$registerStore.errors.fieldErrors.email?.[0] ?? ''}
    />

    <InputGroup
      bind:value={$registerStore.formFields.username}
      placeholder="Username"
      labelFor="username"
      type="text"
      showErrorLabel={$registerStore.showErrors}
      fieldIsValid={!Boolean($registerStore.errors.fieldErrors.username)}
      errorLabelText={$registerStore.errors.fieldErrors.username?.[0] ?? ''}
    />
    <InputGroup
      bind:value={$registerStore.formFields.password}
      placeholder="password"
      labelFor="password"
      type="password"
      showErrorLabel={$registerStore.showErrors}
      fieldIsValid={!Boolean($registerStore.errors.fieldErrors.password)}
      errorLabelText={$registerStore.errors.fieldErrors.password?.[0] ?? ''}
    />
    <InputGroup
      bind:value={$registerStore.formFields.confirmPassword}
      placeholder="Confirm Password"
      labelFor="confirmPassword"
      type="password"
      showErrorLabel={$registerStore.showErrors}
      fieldIsValid={!Boolean($registerStore.errors.fieldErrors.confirmPassword)}
      errorLabelText={$registerStore.errors.fieldErrors.confirmPassword?.[0] ??
        ''}
    />
    <SubmitBtn text="Login" isValid={$registerStore.allIsValid} />
  </form>
</div>
