import { browser } from '$app/env';
import { session } from '$app/stores';
import { derived, type Writable } from 'svelte/store';

export enum Theme {
	Light = 'light',
	Dark = 'dark'
}

export const theme = derived<Writable<App.Session>, Theme>(
	session,
	($session, set) => {
		if ($session.theme) {
			set($session.theme);
		} else if (browser) {
			// set(window.matchMedia('(prefer-color-scheme: dark)').matches ? Theme.Dark : Theme.Light);
			set(Theme.Dark);
		}
	}
);

export const setTheme = (theme: Theme) => {
	session.update(($session) => ({ ...$session, theme }));
	fetch('/theme', {
		method: 'PUT',
		body: theme
	});
};
