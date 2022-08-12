import { RequestHandler } from 'express';
import { isEmailAvailable, isUsernameAvailable } from '$models';
import z from 'zod';

// TODO: Make the min and max length an env variable
const usernameValidator = z.string().min(3).max(14);
const emailValidator = z.string().email();

export const email: RequestHandler = async (req, res) => {
  const { email } = req.query;

  const parsedResult = emailValidator.safeParse(email);

  if (!parsedResult.success) {
    const fieldErrors = parsedResult.error.flatten().fieldErrors;
    res.status(400).json(fieldErrors).end();
    return;
  }

  const isAvailable = await isEmailAvailable(email as string);
  if (!isAvailable)
    res
      .status(409)
      .json({ message: 'Email is already in use by another user' })
      .end();
  else res.json({ message: 'Email is available for use' }).end();
};

export const username: RequestHandler = async (req, res) => {
  const { username } = req.query;

  const parsedResult = usernameValidator.safeParse(username);

  if (!parsedResult.success) {
    const fieldErrors = parsedResult.error.flatten();
    res.status(400).json(fieldErrors).end();
    return;
  }
  const isAvailable = await isUsernameAvailable(username as string);
  if (!isAvailable)
    res
      .status(409)
      .json({ message: 'Username is already in use by another user' })
      .end();
  else res.json({ message: 'Username is available for use' }).end();
};
