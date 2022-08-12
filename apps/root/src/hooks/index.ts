import type { GetSession, Handle } from '@sveltejs/kit';
import { validateTheme, defaultTheme } from 'utils';
import cookie from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {
  const cookies = event.request.headers.get('cookie') || '';

  const { theme } = cookie.parse(cookies);
  event.locals.theme = validateTheme(theme) ? theme : null;

  return resolve(event, {
    transformPageChunk: ({ html }) =>
      // On the very first request, the theme cookie will be '', so the event.locals.theme will resolve to null.
      // For that single request, we default to the defaultTheme
      html.replaceAll('$theme$', event.locals.theme || defaultTheme)
  });
};

export const getSession: GetSession = ({ locals }) => {
  const theme = locals.theme;
  return { theme };
};
