<script lang="ts">
  export let text: string = 'unset';
  export let isValid: boolean = false;
</script>

<div class="w-full">
  <button
    class="{isValid
      ? 'btn-primary'
      : 'btn-secondary btn-outline'} btn w-full mt-8 shadow-2xl"
  >
    {text}
  </button>
</div>
