import { writable } from 'svelte/store';
import { validateFields } from './validator';
import type { RegisterStoreSchema, RegisterSchema } from '@package/types/auth/Register';

const createRegisterStore = () => {
  const formFields: RegisterSchema = {
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  };

  const errors = validateFields(formFields);

  const { subscribe, update, set } = writable<RegisterStoreSchema>({
    formFields,
    errors,
    allIsValid: false,
    showErrors: false,
    progress: Promise.resolve()
  });

  return {
    subscribe,
    update,
    set: (rs: RegisterStoreSchema) => {
      const errors = validateFields(rs.formFields);
      rs.errors = errors;
      if (Object.keys(errors.fieldErrors).length > 0) rs.allIsValid = false;
      else rs.allIsValid = true;
      set(rs);
    },
    submit: () => {
      update(ls => {
        if (!ls.allIsValid) {
          ls.showErrors = true;
          return ls;
        }

        console.log('Not implemented yet');
        return ls;
      });
    }
  };
};

export const registerStore = createRegisterStore();
