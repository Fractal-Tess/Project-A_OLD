import type { LayoutServerLoad } from './$types';

export type LayoutLoadData = {
  currentHref: string;
};

export const load: LayoutServerLoad = ({ url }) => {
  const data: LayoutLoadData = {
    currentHref: url.href
  };
  return data;
};
