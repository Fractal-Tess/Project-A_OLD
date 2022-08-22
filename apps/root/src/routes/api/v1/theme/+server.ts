import type { RequestHandler } from '@sveltejs/kit';
import { validateTheme } from '@package/utils/theme/validator';
import { setThemeCookie } from '@package/utils/theme';

export const PUT: RequestHandler = async ({ request }) => {
  try {
    const { theme } = await request.json();
    if (!validateTheme(theme)) {
      return new Response(JSON.stringify({ message: 'Invalid theme' }), {
        headers: {
          'content-type': 'application/json'
        },
        status: 400
      });
    }

    return new Response(null, {
      headers: {
        'set-cookie': setThemeCookie(theme)
      }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Unable to parse request' }),
      {
        headers: {
          'content-type': 'application/json'
        },
        status: 400
      }
    );
  }
};
