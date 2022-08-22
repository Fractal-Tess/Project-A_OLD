<script lang="ts">
  import InputGroup from '../Inputs/InputGroup.svelte';
  import SubmitBtn from '../Buttons/SubmitBtn.svelte';
  import { loginStore } from '@package/common/auth/stores/login';
</script>

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
    slotPos="BELOW"
  >
    <label for="recovery" class="text-sm text-secondary">
      <a id="recovery" href="/auth/recovery">Forgot your password?</a>
    </label>
  </InputGroup>
  <SubmitBtn text="Login" isValid={$loginStore.allIsValid} />
</form>
