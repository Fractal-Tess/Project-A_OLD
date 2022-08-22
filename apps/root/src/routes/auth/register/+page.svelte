<script lang="ts">
  import { registerStore } from '@package/common/auth/stores/register';
  import RegisterForm from '@package/ui/components/Forms/Register.svelte';

  import { authValidityStore } from '@package/common/auth/stores/authValidityStore';

  $: {
    $authValidityStore.isValid = $registerStore.allIsValid;
  }
  // TODO: Find another image or fix styling on the splash art as it doesn't look right.
</script>

<div class="flex-1 form-control items-center p-8">
  <h1 class="font-extrabold text-2xl md:text-3xl lg:text-4xl lg:pt-4">
    Register
  </h1>
  <RegisterForm />
</div>
