import { theme } from '$lib/stores/theme';
import { userStore } from './user';

const initStores = async () => {
  await Promise.all([theme.load(), userStore.load()]);
};

export { initStores, userStore };
