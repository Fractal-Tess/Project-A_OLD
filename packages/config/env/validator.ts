import { z } from 'zod';

const validator = z.enum(['prod', 'dev']);
/**
 * #### Validate the validity of `process.env.NODE_ENV`
 * @returns {void | never} this throws if the value of NODE_ENV is invalid
 */
export const validateNODE_ENV = () => {
  const validationResult = validator.safeParse(process.env.APP_ENV);

  if (!validationResult.success) {
    throwNodeEnvError();
  }
};

/**
 * #### Throw helper
 * @returns {never} the return is a throw of the standard `Error` class and a message
 */
const throwNodeEnvError = () => {
  throw new Error(
    "The APP_ENV environment variable must be set to either 'dev' or 'prod'"
  );
};
