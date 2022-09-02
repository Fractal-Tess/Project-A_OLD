import { env } from '$env/dynamic/public';
import { z } from 'zod';
import type {
  LoginStoreSchema,
  ValidatorSchema
} from '@package/types/auth/Login';

// TODO: Move those into .env file

const validatorConfig: ValidatorSchema = {
  usernameOrEmail: z
    .string()
    .min(+env.PUBLIC_MIN_USERNAME_LENGTH, {
      message: `At least ${+env.PUBLIC_MIN_USERNAME_LENGTH} characters long`
    })
    .max(+env.PUBLIC_MAX_USERNAME_LENGTH, {
      message: `Cannot be more than ${env.PUBLIC_MAX_USERNAME_LENGTH} characters long`
    }),
  password: z
    .string()
    .min(+env.PUBLIC_MIN_PASSWORD_LENGTH, {
      message: `At least ${env.PUBLIC_MIN_PASSWORD_LENGTH} characters long`
    })
    .max(+env.PUBLIC_MIN_PASSWORD_LENGTH, {
      message: `Password cannot be more than ${+env.PUBLIC_MIN_PASSWORD_LENGTH} characters long`
    })
};

const validator = z.object(validatorConfig);

export const validateFields = (
  fields: LoginStoreSchema['formFields']
): LoginStoreSchema['errors'] => {
  const validationResult = validator.safeParse(fields);

  if (!validationResult.success) {
    const vr = validationResult.error.flatten();
    return vr;
  }
  return {
    fieldErrors: {},
    formErrors: []
  };
};
