<script lang="ts">
  import { recoveryStore } from '@package/common/auth/stores/recovery';
  import RecoveryForm from '@package/ui/components/Forms/Recovery.svelte';

  import { authValidityStore } from '@package/common/auth/stores/authValidityStore';

  $: {
    $authValidityStore.isValid = $recoveryStore.allIsValid;
  }
</script>

<div class="flex-1 form-control items-center p-8">
  <h1 class="font-extrabold text-2xl md:text-3xl lg:text-4xl lg:pt-4">
    Recovery
  </h1>
  <RecoveryForm />
</div>
