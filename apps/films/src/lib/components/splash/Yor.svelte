<script lang="ts">
  import yor from '$assets/yor.webp';
  import { blur } from 'svelte/transition';
  import { expoOut } from 'svelte/easing';
</script>

<div class="rounded-2xl overflow-hidden h-full hero flex items-end">
  <img
    transition:blur={{
      duration: 2000,
      easing: expoOut,
      amount: 10
    }}
    src={yor}
    class="max-h-full object-contain"
    alt="Yor splash for login/register/recovery page"
    style="filter:drop-shadow(5px -5px 5px hsl(var(--p)))"
  />
</div>
