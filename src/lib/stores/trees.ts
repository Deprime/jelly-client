import { persisted } from 'svelte-persisted-store';

import type { Tree } from '$lib/types/tree';

// Types
const DEFAULT_STATE: Tree[] = [];

const { subscribe, set, update } = persisted('trees', DEFAULT_STATE, { storage: 'local' });
const clear = () => set(DEFAULT_STATE);

const treesStore = {
	subscribe,
	set,
	update,
	clear
};

export default treesStore;
