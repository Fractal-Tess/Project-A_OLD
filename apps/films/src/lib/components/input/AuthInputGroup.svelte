<script lang="ts">
  export let target = '';
  export let displayErr = false;
  export let errLabel = '';
  export let normalLabel = '';
  export let valueBind: string;
  export let inputType: 'email' | 'text' | 'password';
  export let placeholder: string;
  export let isValid: boolean = true;

  const inputStyleClass = `input w-72 input-bordered 
    ${
      isValid
        ? 'input-primary focus:border-primary focus:ring-primary'
        : 'input-error focus:border-error focus:ring-error '
    }
      focus:outline-none`;
</script>

{#if displayErr}
  <label for={target} class="label text-secondary">
    <span class="label-text text-error">{errLabel}</span>
  </label>
{:else}
  <label for={target} class="label">
    <span class="label-text">{normalLabel}</span>
  </label>
{/if}
{#if inputType === 'email'}
  <input
    bind:value={valueBind}
    id={target}
    type="email"
    {placeholder}
    class={inputStyleClass}
  />
{:else if inputType === 'password'}
  <input
    bind:value={valueBind}
    id={target}
    type="password"
    {placeholder}
    class={inputStyleClass}
  />
{:else if inputType === 'text'}
  <input
    bind:value={valueBind}
    id={target}
    type="text"
    {placeholder}
    class={inputStyleClass}
  />
{/if}
