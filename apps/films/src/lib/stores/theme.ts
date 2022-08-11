import type { Theme } from '$types';
import { writable, type Writable } from 'svelte/store';
import { store } from '$stores/tauri-store';

const createThemeStore = () => {
  const DEFAULT_THEME = 'dark';

  const { subscribe, update, set } = writable() as Writable<string>;

  return {
    subscribe,
    toggleTheme: () => {
      update(currentTheme => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        store.set('theme', newTheme);
        return newTheme;
      });
    },
    load: async () => {
      let storedTheme = (await store.get('theme')) as Theme | null;
      if (!storedTheme) {
        storedTheme = DEFAULT_THEME;
        store.set('theme', storedTheme);
      }
      set(storedTheme);
    }
  };
};

export const theme = createThemeStore();
