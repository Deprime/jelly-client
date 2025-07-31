import { persisted } from 'svelte-persisted-store';

// Types
const DEFAULT_STATE = '';

const { subscribe, set, update } = persisted('accessToken', DEFAULT_STATE, { storage: 'local' });
const clear = () => set(DEFAULT_STATE);

const accessTokenStore = {
	subscribe,
	set,
	update,
	clear
};

export default accessTokenStore;
