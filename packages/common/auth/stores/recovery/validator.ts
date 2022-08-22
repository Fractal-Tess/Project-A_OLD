import type { RecoveryStoreSchema, ValidatorSchema } from '@package/types/auth/Recovery';
import { z } from 'zod';

const validatorConfig: ValidatorSchema = {
  email: z.string().email({ message: 'Input a valid email' })
};

const validator = z.object(validatorConfig);

export const validateFields = (
  fields: RecoveryStoreSchema['formFields']
): RecoveryStoreSchema['errors'] => {
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
