<script lang="ts">
  import InputGroup from '../Inputs/InputGroup.svelte';
  import SubmitBtn from '../Buttons/SubmitBtn.svelte';
  import { recoveryStore } from '@package/common/auth/stores/recovery';
</script>

<form
  on:submit|preventDefault={recoveryStore.submit}
  class="flex-1 form-control items-center justify-center space-y-2 md:space-y-6 mt-2 w-full"
>
  <InputGroup
    bind:value={$recoveryStore.formFields.email}
    placeholder="Email"
    labelFor="email"
    type="email"
    showErrorLabel={$recoveryStore.showErrors}
    fieldIsValid={!Boolean($recoveryStore.errors.fieldErrors.email)}
    errorLabelText={$recoveryStore.errors.fieldErrors.email?.[0] ?? ''}
  />

  <SubmitBtn text="Recover" isValid={$recoveryStore.allIsValid} />
</form>
