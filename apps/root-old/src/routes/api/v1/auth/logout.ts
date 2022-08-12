import { RequestHandler } from 'express';

export const logout: RequestHandler = (req, res) => {
  res.send(JSON.stringify({ msg: 'You asked for the logout route' })).end();
  return;
};
