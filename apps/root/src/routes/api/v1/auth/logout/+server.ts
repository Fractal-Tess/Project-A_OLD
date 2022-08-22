import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
  return new Response(JSON.stringify('Hello world'));
};
