import cookie from 'cookie';
import type { RequestEvent } from '@sveltejs/kit';

export const parseCookies = <T>(
  event: RequestEvent<Partial<Record<string, string>>>
) => {
  const cookies = event.request.headers.get('cookie');
  const parsedCookies = cookie.parse(cookies || '') as unknown as Partial<T>;
  return parsedCookies;
};
