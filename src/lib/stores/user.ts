import { persisted } from 'svelte-persisted-store';

import type { User } from '$lib/types/user';

// Types
const DEFAULT_STATE: User = {
	id: 0,
	parent_id: null,
	uuid: '',
	nickname: '',
	telegram_id: null,
	twitter_id: null,
	vk_id: null,
	unit_slots: 0,
	tree_slots: 0,
	invites: 0,
	berries: 0,
	coins: '',
	raided_ts: null,
	created_at: '',
	updated_at: ''
};

const { subscribe, set, update } = persisted('user', DEFAULT_STATE, { storage: 'local' });
const clear = () => set(DEFAULT_STATE);

const userStore = {
	subscribe,
	set,
	update,
	clear
};

export default userStore;
