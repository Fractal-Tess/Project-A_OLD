<script lang="ts">
  export let labelFor: string;
  export let showErrorLabel: boolean = false;
  export let errorLabelText: string = '';

  export let type: string;

  export let placeholder: string;
  export let value: string;

  export let fieldIsValid: boolean = false;

  const defaultInputStyle = 'input input-bordered focus:outline-none w-full mt-2 shadow-2xl';
  let inputStyleClass = defaultInputStyle;
  $: {
    inputStyleClass = `${fieldIsValid ? 'input-primary' : 'input-error'} ` + defaultInputStyle;
  }

  // TODO: Add more positions
  // TODO: Convert this to enum
  type SlotPos = 'ABOVE' | 'BELOW';

  export let slotPos: SlotPos = 'BELOW';
</script>

<div class="w-full flex flex-col">
  <!-- TODO: Fix slot position as it goes way above the input element -->
  {#if slotPos === 'ABOVE'}
    <slot />
  {/if}
  <label for={labelFor} class="label h-5">
    {#if showErrorLabel}
      <span class="label-text text-secondary ">{errorLabelText}</span>
    {/if}
  </label>
  {#if type === 'email'}
    <input bind:value id={labelFor} type="email" {placeholder} class={inputStyleClass} />
  {:else if type === 'text'}
    <input bind:value id={labelFor} type="text" {placeholder} class={inputStyleClass} />
  {:else if type === 'password'}
    <input bind:value id={labelFor} type="password" {placeholder} class={inputStyleClass} />
  {:else}
    <div>This should be unreachable</div>
  {/if}
  {#if slotPos === 'BELOW'}
    <slot />
  {/if}
</div>
