<script lang="ts">
  import { userStore } from '$stores/user';
  export let gotoLogin: () => void;
</script>

<div class="hero h-full">
  <form class="form-control text-center">
    <!-- Register heading -->
    <h1 class="font-bold">Account recovery</h1>
    <!-- Email -->
    <label for="email" class="label">
      <span class="label-text">Email</span>
    </label>
    <input
      id="email"
      type="text"
      bind:value={$userStore.recoveryStore.email}
      class="input input-bordered input-secondary focus:ring-secondary focus:border-secondary focus:outline-none"
    />
    {#if $userStore.recoveryStore.showRecoveryCodeInput}
      <label for="recoveryCode" class="label">
        <span class="label-text">Recovery code</span>
      </label>
      <input
        bind:value={$userStore.recoveryStore.recoveryCode}
        id="recoveryCode"
        type="number"
        class="input input-bordered input-secondary focus:ring-secondary focus:border-secondary focus:outline-none"
      />
    {/if}

    <!-- Register button -->
    <button
      on:click|preventDefault={() => {
        console.log('Called resiget');
      }}
      type="submit"
      class="btn btn-secondary mt-8">Recover account</button
    >
    <label class="label label-text-alt">
      Don't need recovery?
      <button on:click|preventDefault={gotoLogin} class="label-text-alt cursor-default">
        <span
          class="ml-2 text-secondary underline underline-offset-2 decoration-secondary cursor-pointer"
          >Login</span
        >
      </button>
    </label>
  </form>
</div>
