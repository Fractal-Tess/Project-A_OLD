import { writable } from 'svelte/store';

export const authValidityStore = writable({ isValid: false });
