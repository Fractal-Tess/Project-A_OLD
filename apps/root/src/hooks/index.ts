import type { Theme } from '$lib/stores/theme';
import type { GetSession, Handle } from '@sveltejs/kit';
import { isTheme } from '../types';
import type { Writable } from 'svelte/store';

export type SessionData = { theme: Theme };
export type SessionStore = Writable<SessionData>;

export const getCookieValue = (
  cookie: string | null,
  name: string
): string | null =>
  cookie?.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || null;

const getThemeFromCookie = (cookie: string) => {
  const theme = getCookieValue(cookie, 'theme');
  return isTheme(theme) ? theme : null;
};

export const handle: Handle = async ({ event, resolve }) => {
  const cookie = event.request.headers.get('cookie');
  event.locals.theme = getThemeFromCookie(cookie);

  return resolve(event);
};
export const getSession: GetSession = ({ locals }) => {
  const theme = locals.theme;
  return { theme };
};
