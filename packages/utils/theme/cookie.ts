import type { Theme } from '@package/types/theme';
import cookie from 'cookie';
import moment from 'moment';

export const setThemeCookie = (theme: Theme): string => {
  return cookie.serialize('theme', theme, {
    path: "/",
    maxAge: moment().add(30, 'years').valueOf()
  })
};


// TODO: Fix the static api route for sup domain apps
export const requestSetCookieTheme = (theme: Theme) => {
  fetch('/api/v1/theme', {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ theme })
  });
};