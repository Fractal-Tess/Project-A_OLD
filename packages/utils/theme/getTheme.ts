import type { Theme } from 'types';

// This does not work on the server !!!
export const getPreferredTheme = (): Theme =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const defaultTheme: Theme = 'light';
