import http from '$lib/config/http';
import type { Unit } from '$lib/types/unit';
import type { User } from '$lib/types/user';

const prefix = 'v1/users';

export const userApi = {
	/**
	 * Get user data
	 */
	me: (): Promise<{ user: User; units: Unit[] }> => {
		return http.get(`${prefix}/me`).json();
	}
};
