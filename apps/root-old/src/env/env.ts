import { config as loadEnv } from 'dotenv';

loadEnv();

interface Env extends NodeJS.ProcessEnv {
  EXPRESS_PORT: string;
  SENDGRID_API_KEY: string;
}

export const { EXPRESS_PORT, SENDGRID_API_KEY } = process.env as Env;
