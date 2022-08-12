import type { RequestHandler } from '@sveltejs/kit';
import { setCookieTheme, validateTheme } from 'utils';

// TODO: add more configs to the cookie header response

export const PUT: RequestHandler = async ({ request }) => {
  try {
    const { theme } = await request.json();
    if (!validateTheme(theme)) {
      return {
        status: 400,
        body: { message: 'Invalid theme' }
      };
    }

    return {
      headers: {
        'set-cookie': setCookieTheme(theme)
      }
    };
  } catch (error) {
    return {
      status: 400,
      body: { message: 'Cannot parse request' }
    };
  }
};
