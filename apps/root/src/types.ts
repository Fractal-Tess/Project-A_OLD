const themes = ['light', 'dark'] as const;
export type Theme = typeof themes[0 | 1];

export const isTheme = (theme: string): theme is Theme =>
	themes.includes(theme as Theme);
