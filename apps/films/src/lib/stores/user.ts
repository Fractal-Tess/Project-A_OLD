import type { UserStore } from '$types';
import { writable, type Writable } from 'svelte/store';

const createUserStore = () => {
  const { subscribe } = writable({
    username: '',
    isLoggedIn: false
  }) as Writable<UserStore>;

  return {
    subscribe,
    load: async () => {
      console.log('This should init the user object in the store');
    }
  };
};

export const userStore = createUserStore();
