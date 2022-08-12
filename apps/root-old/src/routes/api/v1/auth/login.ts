import { RequestHandler } from 'express';

export const login: RequestHandler = (req, res) => {
  res.send(JSON.stringify({ msg: 'You asked for the login route' })).end();
  return;
};
