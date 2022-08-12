export const theme = ['dark', 'light'] as const;

export type Theme = typeof theme[number];
