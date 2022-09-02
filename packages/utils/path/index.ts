export const resolve = (current: string, target: string): string =>
  new URL(target, current).pathname;
