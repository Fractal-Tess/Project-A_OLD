import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
  try {
  } catch (e) {
    console.log(e);
  }

  return new Response(null, { status: 200 });
};
