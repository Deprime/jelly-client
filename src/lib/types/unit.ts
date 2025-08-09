export interface Unit {
	id: number;
	user_id: number;
	uuid: string;
	level: number;
	rarity: string;
	element: string;
	skin: string | null;
	skin_id: string;
	feed_reset_ts: number | null;
	feed_count: number;
	tokens: string;
	evolved_ts: number | null;
	created_ts: number;
	updated_ts: number;
}
