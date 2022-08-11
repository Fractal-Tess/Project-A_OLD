import { derived, writable, type Readable } from 'svelte/store';

const isOnline = async (): Promise<boolean> => {
  try {
    const res = await fetch('http://localhost:29891/online', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (res.status !== 200) return false;
    return true;
  } catch (error) {
    return false;
  }
};

const createAsyncServerStatusStore = () => {
  const { subscribe, set } = writable(isOnline());

  return {
    subscribe,
    refreshServerStatus: () => {
      set(isOnline());
    }
  };
};

const asyncServerStatusStore = createAsyncServerStatusStore();

export const refreshServerStatus = asyncServerStatusStore.refreshServerStatus;
export const isServerOnlineStore = derived(
  asyncServerStatusStore,
  ($asyncServerStatusStore, set) => {
    $asyncServerStatusStore.then(status => set(status));
  }
);
