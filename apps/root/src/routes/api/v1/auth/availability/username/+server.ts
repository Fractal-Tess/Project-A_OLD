import type { RequestHandler } from '@sveltejs/kit';
import { isUsernameAvailable } from '@package/prisma/auth/availability';

export const GET: RequestHandler = async ({ url }) => {
  const username = url.searchParams.get('username');

  if (!username) {
    return new Response(
      JSON.stringify({ message: 'You need to query for username.' }),
      { status: 400 }
    );
  }

  // #46 Cache this to prevent overuse of database queries
  const availability = await isUsernameAvailable(username);

  return new Response(JSON.stringify({}), { status: 200 });
};
