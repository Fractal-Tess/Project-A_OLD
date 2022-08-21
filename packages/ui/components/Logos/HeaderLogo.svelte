<script lang="ts">
  export let logoBreakpoint = '768px';
  import logoLarge from '@package/assets/jb/logo-large.png';
  import logoSmall from '@package/assets/jb/logo-small.png';
</script>

<picture>
  <source srcset={logoLarge} media="(min-width:{logoBreakpoint})" />
  <img
    decoding="async"
    src={logoSmall}
    alt="website logo"
    class="dark:invert h-full object-contain"
  />
</picture>
