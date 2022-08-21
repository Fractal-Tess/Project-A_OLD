import {requestSetCookieTheme} from '@package/utils/theme/cookie'
import { defaultTheme } from '@package/utils/theme/defaultTheme'
import { writable } from 'svelte/store';
import { browser } from '$app/env'

import type { Theme } from '@package/types/theme'

const getPreferredTheme = (): Theme =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const createThemeStore = (theme: Theme | null) => {
  if (!theme) {
    if (browser) {
      theme = getPreferredTheme();
      requestSetCookieTheme(theme);
    } else theme = defaultTheme;
  }

  const { subscribe, update, set } = writable<Theme>(theme);

  return {
    subscribe,
    toggleTheme: () => {
      update(currentTheme => {
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        requestSetCookieTheme(nextTheme);
        return nextTheme;
      });
    },
    setTheme: (theme: Theme) => {
      set(theme);
      requestSetCookieTheme(theme);
    }
  };
};
