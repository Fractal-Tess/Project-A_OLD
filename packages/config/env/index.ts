/// <reference types="./environment" />
import { config } from 'dotenv';

export const isDev = process.env.APP_ENV === 'dev' ? true : false;

export const getEnvPath = (): string => {
  const currentFile = new URL(import.meta.url).pathname;
  const index = currentFile.lastIndexOf('/');
  const envPath = currentFile.slice(0, index);
  return envPath;
};

export const loadEnv = (): void => {
  const override = true;
  const debug = false;
  config({
    path: getEnvPath() + '.env',
    override,
    debug
  });

  console.log(process.env.PUBLIC_MAX_PASSWORD_LENGTH);
};
