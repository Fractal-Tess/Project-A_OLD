declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly APP_ENV: 'prod' | 'dev' | undefined;

      readonly PUBLIC_MAX_USERNAME_LENGTH: string;
      readonly PUBLIC_MIN_USERNAME_LENGTH: string;
      readonly PUBLIC_MAX_PASSWORD_LENGTH: string;
      readonly PUBLIC_MIN_PASSWORD_LENGTH: string;
    }
  }
}

export type PrivateEnv = {
  readonly DB_HOST: string;
  readonly DB_PORT: string;
  readonly DB_USER: string;
  readonly DB_PASSWORD: string;
  readonly DATABASE_URL: string;
};

export type PublicEnv = {
  readonly PUBLIC_MAX_USERNAME_LENGTH: string;
  readonly PUBLIC_MIN_USERNAME_LENGTH: string;
  readonly PUBLIC_MAX_PASSWORD_LENGTH: string;
  readonly PUBLIC_MIN_PASSWORD_LENGTH: string;
};
