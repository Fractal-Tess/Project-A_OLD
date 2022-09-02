import type { RequestHandler } from '@sveltejs/kit';
import { isEmailAvailable } from '@package/prisma/auth/availability';
import { isEmail } from '@package/utils/validators/auth/email';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const data = await request.json();
    const email = data.email;
    if (isEmail(email)) {
      const isAvailable = await isEmailAvailable(email);
      if (isAvailable) return resUtil(200);
      return resUtil(409, 'This email is already in use');
    }
    return resUtil(400, 'The email field needs to be a valid email');
  } catch (e) {
    return resUtil(
      400,
      "You need to specify an 'email' field in the json request"
    );
  }
};

const resUtil = (status: number, message?: string) => {
  return new Response(message ? JSON.stringify({ message }) : null, { status });
};
