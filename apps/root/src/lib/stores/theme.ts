import { getPreferredTheme } from 'utils';
import { browser } from '$app/env';
import { session } from '$app/stores';
import { derived, type Writable, get } from 'svelte/store';
import type { Theme } from 'types';

const createThemeStore = () => {
  const setCookieTheme = async (theme: Theme) => {
    fetch('/theme', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ theme })
    });
  };

  const { subscribe } = derived<Writable<App.Session>, Theme>(
    session,
    ($session, set) => {
      if ($session.theme) set($session.theme);
      else if (browser) {
        // On the very first request, theme inside of the session will be null,
        // so we ask the guest browser which theme he prefers and we set the theme cookie to that
        const theme = getPreferredTheme();
        set(theme);
        setCookieTheme(theme);
      }
    }
  );

  return {
    subscribe,
    toggleTheme: () => {
      session.update($session => {
        const currentTheme = $session.theme;
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setCookieTheme(newTheme);
        return { ...$session, theme: newTheme };
      });
    },
    setTheme: (theme: Theme) =>
      session.update($session => {
        setCookieTheme(theme);
        return { ...$session, theme };
      })
  };
};

export const theme = createThemeStore();
