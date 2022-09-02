import { writable } from 'svelte/store';
import { validateFields } from './validator';
import type {
  RegisterStoreSchema,
  RegisterSchema
} from '@package/types/auth/Register';

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
    set: async (rs: RegisterStoreSchema) => {
      const res = await fetch(
        '/api/v1/auth/availability/username?' +
          new URLSearchParams({ username: rs.formFields.username })
      );

      console.log(res.status);

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
        fetch('/api/v1/auth/register', {
          method: 'POST',
          body: JSON.stringify(ls.formFields),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        return ls;
      });
    }
  };
};

export const registerStore = createRegisterStore();
