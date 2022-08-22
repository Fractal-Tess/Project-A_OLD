import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
  console.log(await request.json());

  return new Response(null, { status: 200 });
};
