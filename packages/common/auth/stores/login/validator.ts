import type {
  LoginStoreSchema,
  ValidatorSchema
} from '@package/types/auth/Login';
import { z } from 'zod';

// TODO: Move those into .env file
const USERNAME_OR_EMAIL_MIN_LENGTH = 3;
const USERNAME_OR_EMAIL_MAX_LENGTH = 30;
const PASSWORD_MAX_LENGTH = 30;
const PASSWORD_MIN_LENGTH = 6;

const validatorConfig: ValidatorSchema = {
  usernameOrEmail: z
    .string()
    .min(USERNAME_OR_EMAIL_MIN_LENGTH, {
      message: `At least ${USERNAME_OR_EMAIL_MIN_LENGTH} characters long`
    })
    .max(USERNAME_OR_EMAIL_MAX_LENGTH, {
      message: `Cannot be more than ${USERNAME_OR_EMAIL_MAX_LENGTH} characters long`
    }),
  password: z
    .string()
    .min(PASSWORD_MIN_LENGTH, {
      message: `At least ${PASSWORD_MIN_LENGTH} characters long`
    })
    .max(PASSWORD_MAX_LENGTH, {
      message: `Password cannot be more than ${PASSWORD_MAX_LENGTH} characters long`
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
