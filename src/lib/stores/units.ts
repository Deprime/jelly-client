import { persisted } from 'svelte-persisted-store';

import type { Unit } from '$lib/types/unit';

// Types
const DEFAULT_STATE: Unit[] = [];

const { subscribe, set, update } = persisted('units', DEFAULT_STATE, { storage: 'local' });
const clear = () => set(DEFAULT_STATE);

const unitsStore = {
	subscribe,
	set,
	update,
	clear
};

export default unitsStore;
