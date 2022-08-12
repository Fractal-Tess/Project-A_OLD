import { RegisterData } from '../../../../types.js';
import { RequestHandler } from 'express';
import { createUser } from '$models';

export const register: RequestHandler = async (req, res) => {
  const reg = req.body as RegisterData;
  const result = await createUser(reg);
  if (result.err) {
    console.log(
      `A user was not created. Reason: ${JSON.stringify(result.err, null, 4)}`
    );
    res.status(409).end();
  }
  res.end();
  return;
};
