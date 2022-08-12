import { type Theme, theme } from 'types';
import z from 'zod';
import moment from 'moment';
import cookie from 'cookie';

const themeValidator = z.enum(theme);

export const validateTheme = (theme: string): theme is Theme => {
  const validationResult = themeValidator.safeParse(theme);
  return validationResult.success;
};

export const setCookieTheme = (theme: Theme): string =>
  cookie.serialize('theme', theme, {
    maxAge: moment().add(30, 'years').valueOf()
  });
