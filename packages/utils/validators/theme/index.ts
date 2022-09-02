import z from 'zod';
import { type Theme, themes } from '@package/types/theme';

const themeValidator = z.enum(themes);

export const validateTheme = (theme: any): theme is Theme => {
  const validationResult = themeValidator.safeParse(theme);
  return validationResult.success;
};
