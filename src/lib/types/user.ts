export interface User {
	id: number;
	parent_id: number | null;
	uuid: string;
	nickname: string;
	telegram_id: string | null;
	twitter_id: string | null;
	vk_id: string | null;
	unit_slots: number;
	tree_slots: number;
	invites: number;
	berries: number;
	coins: string;
	raided_ts: number | null;
	created_at: string;
	updated_at: string;
}
