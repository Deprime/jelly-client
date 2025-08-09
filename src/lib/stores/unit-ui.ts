import { persisted } from 'svelte-persisted-store';

type UnitUi = {
	selected_id: number | null;
};

// Types
const DEFAULT_STATE: UnitUi = {
	selected_id: null
};

const { subscribe, set, update } = persisted('unit-ui', DEFAULT_STATE, { storage: 'local' });
const clear = () => set(DEFAULT_STATE);

const unitUiStore = {
	subscribe,
	set,
	update,
	clear
};

export default unitUiStore;
