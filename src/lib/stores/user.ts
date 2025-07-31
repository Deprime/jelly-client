import { persisted } from 'svelte-persisted-store';

// Types
const DEFAULT_STATE = {};

const { subscribe, set, update } = persisted('user', DEFAULT_STATE, { storage: 'local' });
const clear = () => set(DEFAULT_STATE);

const userStore = {
	subscribe,
	set,
	update,
	clear
};

export default userStore;
