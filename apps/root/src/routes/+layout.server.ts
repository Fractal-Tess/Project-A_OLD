import type { Theme } from '@package/types/theme';
import type { LayoutServerLoad } from './$types';

export type LayoutLoadData = {
  theme: Theme | null;
};

export const load: LayoutServerLoad = ({ locals }) => {
  const data: LayoutLoadData = {
    theme: locals.theme
  };
  return data;
};
