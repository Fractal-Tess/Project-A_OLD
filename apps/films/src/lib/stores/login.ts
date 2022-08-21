import { writable } from 'svelte/store';
import { z } from 'zod';

const USER_OR_EMAIL_MIN_LENGTH = 3;
const EMAIL_MAX_LENGTH = 64;
const PASSWORD_MIN_LENGTH = 6;
const PASSWORD_MAX_LENGTH = 64;

type StoreWithValidation<T extends z.ZodTypeAny> = {
  validationErrs: z.inferFlattenedErrors<T>;
  showErrors: boolean;
  isValid: boolean;
  data: z.output<T>;
};

type LoginStore = StoreWithValidation<typeof validationSchema>;

const validateLogin = (ls: LoginStore) => {
  const parsedResult = validationSchema.safeParse(ls.data);
  if (!parsedResult.success) {
    ls.validationErrs = parsedResult.error.flatten();
    ls.isValid = false;
    return ls;
  }
  ls.validationErrs = {
    formErrors: [],
    fieldErrors: {}
  };

  ls.isValid = true;
  return ls;
};

const validationSchema = z.object({
  usernameOrEmail: z
    .string()
    .min(USER_OR_EMAIL_MIN_LENGTH, 'Invalid username or email')
    .max(EMAIL_MAX_LENGTH, 'Invalid username or email')
    .refine(username => username.length !== 0, {
      message: 'You need to input a username or an email'
    }),

  password: z
    .string()
    .min(PASSWORD_MIN_LENGTH, `Needs to be at least ${PASSWORD_MIN_LENGTH} characters `)
    .max(PASSWORD_MAX_LENGTH, `Needs to be at at most ${PASSWORD_MAX_LENGTH} characters `)
});

const createLoginStore = () => {
  const defaultLS: LoginStore = {
    isValid: false,
    showErrors: false,
    validationErrs: {
      fieldErrors: {
        usernameOrEmail: [],
        password: []
      },
      formErrors: []
    },
    data: {
      usernameOrEmail: '',
      password: ''
    }
  };

  const { subscribe, update, set } = writable(defaultLS);

  return {
    subscribe,
    set: (ls: LoginStore) => {
      set(validateLogin(ls));
    },
    submit: () => {
      update(ls => {
        ls = validateLogin(ls);
        ls.showErrors = true;
        if (ls.isValid) {
          console.log('Submit');
        }
        return ls;
      });
    },
    hideErrs: () => {
      update(ls => {
        ls.showErrors = false;
        return ls;
      });
    }
  };
};

export const loginStore = createLoginStore();
