import { writable } from 'svelte/store';
import type { RecoveryStoreSchema } from '@package/types/auth/Recovery';
import { validateFields } from './validator';

const createRecoveryStore = () => {
  const formFields = {
    email: ''
  };

  const errors = validateFields(formFields);

  const { subscribe, update, set } = writable<RecoveryStoreSchema>({
    formFields,
    errors,
    allIsValid: false,
    showErrors: false,
    progress: Promise.resolve()
  });

  return {
    subscribe,
    update,
    set: (rs: RecoveryStoreSchema) => {
      const errors = validateFields(rs.formFields);
      rs.errors = errors;
      if (Object.keys(errors.fieldErrors).length > 0) rs.allIsValid = false;
      else rs.allIsValid = true;
      set(rs);
    },
    submit: () => {
      update(rs => {
        if (!rs.allIsValid) {
          rs.showErrors = true;
          return rs;
        }

        console.log('Not implemented yet');
        return rs;
      });
    }
  };
};

export const recoveryStore = createRecoveryStore();
