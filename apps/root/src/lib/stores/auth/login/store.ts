import type { LoginStoreSchema } from '@package/types/auth/Login';
import { writable } from 'svelte/store';
import { validateFields } from './validator';

const createLoginStore = () => {
  const formFields = {
    usernameOrEmail: '',
    password: ''
  };
  const errors = validateFields(formFields);

  const { subscribe, update, set } = writable<LoginStoreSchema>({
    formFields,
    errors,
    allIsValid: false,
    showErrors: false,
    progress: Promise.resolve()
  });

  return {
    subscribe,
    update,
    set: (ls: LoginStoreSchema) => {
      const errors = validateFields(ls.formFields);
      ls.errors = errors;
      if (Object.keys(errors.fieldErrors).length > 0) ls.allIsValid = false;
      else ls.allIsValid = true;
      set(ls);
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

export const loginStore = createLoginStore();
