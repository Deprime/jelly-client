import http from '$lib/config/http';

const prefix = 'v1/auth';

export const authApi = {
	telegram: (data: any) => {
		return http.post(`${prefix}/telegram`, { json: data }).json();
	}
};
