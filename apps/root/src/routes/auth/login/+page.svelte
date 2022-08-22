<script lang="ts">
  import { loginStore } from '@package/common/auth/stores/login';
  import LoginForm from '@package/ui/components/Forms/LoginForm.svelte';
  import { authValidityStore } from '@package/common/auth/stores/authValidityStore';

  $: {
    $authValidityStore.isValid = $loginStore.allIsValid;
  }
</script>

<div class="flex-1 form-control items-center p-8">
  <h1 class="font-extrabold text-2xl md:text-3xl lg:text-4xl lg:pt-4">Login</h1>
  <LoginForm />
</div>
