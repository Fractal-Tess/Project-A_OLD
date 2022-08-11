<script>
  // import { asyncServerStatusStore } from '$store';
  import { refreshServerStatus } from '$stores/serverStatus';
</script>

<div
  class="text-center text-2xl font-bold flex flex-col h-full justify-center items-center gap-8"
>
  <h1>
    Hey there
    <br />
    Unfortunetelyu it appears that the server is offline
    <br />
    Check back later or contact the author
  </h1>

  <button
    class="btn btn-xl btn-secondary btn-outline"
    on:click={refreshServerStatus}>Refresh</button
  >
</div>
