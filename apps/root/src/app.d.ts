// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  import type { Theme } from 'config/theme';
  interface Locals {
    theme: Theme | null;
  }
  // interface Platform {}
  // interface PrivateEnv {}
  // interface PublicEnv {}
  interface Session {
    theme: Theme | null;
  }
  // interface Stuff {}
}
