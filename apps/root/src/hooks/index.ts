import type { Handle } from '@sveltejs/kit';
import { defaultTheme, validateTheme } from '@package/utils/theme';
import { parseCookies } from '@package/utils/cookies/parseCookies';

type ParsedCookiesSchema = {
  theme: string;
};

export const handle: Handle = async ({ event, resolve }) => {
  const { theme } = parseCookies<ParsedCookiesSchema>(event);
  if (validateTheme(theme)) {
    event.locals.theme = theme;
  } else event.locals.theme = null;

  return resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replaceAll('$theme$', event.locals.theme || defaultTheme)
  });
};
