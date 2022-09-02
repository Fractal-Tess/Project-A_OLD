declare namespace App {
  interface Locals {
    theme: import('@package/types/theme').Theme | null;
  }
  type PrivateEnv = import('@package/config/env/environment').PrivateEnv;
  type PublicEnv = import('@package/config/env/environment').PublicEnv;

  // interface Stuff {}
  // interface Platform {}
  // interface ImportMeta {}
}
