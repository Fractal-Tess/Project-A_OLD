import { writable, type Writable } from 'svelte/store';
import z from 'zod';
import { userStore } from '$stores/user';

const USERNAME_MAX_LENGTH = 14;
const USERNAME_MIN_LENGTH = 3;
const PASSWORD_MIN_LENGTH = 6;
const PASSWORD_MAX_LENGTH = 64;

type ErrObj = {
  message: string;
  hasErr: boolean;
};
type RegisterStore = {
  err: {
    email: ErrObj;
    username: ErrObj;
    password: ErrObj;
    confirmPassword: ErrObj;
  };
  reg: {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
  };
  isValid: boolean;
  showErrs: boolean;
  submitInProgress: boolean;
};

const knownUsedEmail: string[] = [];
const knownUsedUsernames: string[] = [];

const createRegisterStore = () => {
  const { subscribe, update, set } = writable({
    reg: {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    },
    err: {
      email: { message: '', hasErr: true },
      username: { message: '', hasErr: true },
      password: { message: '', hasErr: true },
      confirmPassword: { message: '', hasErr: true }
    },
    isValid: false,
    showErrs: false
  }) as Writable<RegisterStore>;

  return {
    subscribe,
    set: (rs: RegisterStore) => {
      set(validateReg(rs));
    },
    showErrs: () => {
      /**
       * Whenever the register button is hovered, enable showing errors above input fields
       */
      update(rs => {
        rs = validateReg(rs);
        rs.showErrs = true;
        return rs;
      });
    },

    submit: () => {
      /**
       * If all the data in the input fields is valid, allow the user to submit the data to the register api
       * TODO: The register api will respond with 409 status code if a user with that username/email already exists,
       * so show the error if that is the case
       * TODO: Otherwise, it will be a 200 ok status, and there should be a JWT token on the response
       */
      update(rs => {
        console.log(JSON.stringify(rs.reg));
        if (rs.isValid) {
          (async () => {
            rs.submitInProgress = true;
            set(rs);
            const res = await fetch('http://localhost:29891/api/v1/register', {
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'post',
              body: JSON.stringify({
                email: rs.reg.email,
                username: rs.reg.username,
                password: rs.reg.password
              })
            });
            if (res.status === 200) {
              userStore.load();
            }
            if (res.status === 409) {
              res.json().then(json => {
                console.log(json);
              });
            }

            rs.submitInProgress = false;
            set(rs);
          })();
        }
        return rs;
      });
    },

    submitInProgress: false
  };
};

const validateReg = (rs: RegisterStore): RegisterStore => {
  /**
   * Reset all previous errors
   */
  rs.isValid = true;

  for (const key of Object.keys(rs.err)) {
    {
      // @ts-ignore
      rs.err[key] = {
        hasErr: false,
        message: ''
      };
    }
  }

  /**
   * Check for new errors
   */
  const parsedResult = registerValidator.safeParse(rs.reg);
  if (!parsedResult.success) {
    for (const { path, message } of parsedResult.error.errors) {
      // @ts-ignore
      rs.err[path] = {
        message,
        hasErr: true
      };
    }
    rs.isValid = false;
  }
  return rs;
};

const registerValidator = z
  .object({
    email: z.string().email({ message: 'Must be a valid email' }),
    username: z
      .string()
      .refine(
        username =>
          username.length >= USERNAME_MIN_LENGTH &&
          username.length <= USERNAME_MAX_LENGTH,
        {
          message: `Must be between ${USERNAME_MIN_LENGTH} and ${USERNAME_MAX_LENGTH} character`
        }
      ),
    password: z
      .string()
      .refine(
        password =>
          password.length >= PASSWORD_MIN_LENGTH &&
          password.length <= PASSWORD_MAX_LENGTH,
        {
          message: `Must be between ${PASSWORD_MIN_LENGTH} and ${PASSWORD_MAX_LENGTH} character`
        }
      ),
    confirmPassword: z
      .string()
      .refine(
        confirmPassword =>
          confirmPassword.length >= PASSWORD_MIN_LENGTH &&
          confirmPassword.length <= PASSWORD_MAX_LENGTH,
        {
          message: `Passwords do not match`
        }
      )
  })
  .refine(
    data => {
      const result =
        data.password === data.confirmPassword && data.confirmPassword !== '';
      console.log(result);
      return result;
    },

    {
      message: 'Passwords do not match',
      path: ['confirmPassword']
    }
  )
  .refine(data => !knownUsedEmail.includes(data.email), {
    message: 'This email is used by another user',
    path: ['email']
  })
  .refine(data => !knownUsedUsernames.includes(data.username), {
    message: 'This username is used by another user',
    path: ['username']
  });

export const registerStore = createRegisterStore();
