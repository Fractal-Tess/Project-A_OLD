<script lang="ts">
  import { recoveryStore } from '$lib/stores/auth/recovery';
  import InputGroup from '@package/ui/components/Inputs/InputGroup.svelte';
  import SubmitBtn from '@package/ui/components/Buttons/SubmitBtn.svelte';
</script>

<div class="flex-1 form-control items-center p-8 h-full">
  <h1 class="font-extrabold text-2xl md:text-3xl lg:text-4xl lg:pt-4">
    Recovery
  </h1>
  <script lang="ts">
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
</div>
