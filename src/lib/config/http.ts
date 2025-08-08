import ky from 'ky';

const API_HOST = import.meta.env.VITE_API_HOST;

const httpHelper = {
	noTokenUrls: ['auth/username', 'telegram'],

	/**
	 * Get token from local storage
	 */
	getLsToken: (): string => {
		let token = '';
		if (typeof localStorage === 'object' && localStorage.getItem('accessToken')) {
			const raw = localStorage.getItem('accessToken');
			if (raw) {
				token = JSON.parse(raw);
			}
		}
		return token;
	}
};

const http = ky.create({
	prefixUrl: API_HOST,
	// credentials: 'include',
	mode: 'cors',
	headers: {
		'Content-Type': 'application/json'
	},
	retry: {
		limit: 2,
		statusCodes: [401],
		methods: ['get', 'post', 'put']
	},
	hooks: {
		beforeRequest: [
			(request) => {
				const last = request.url.split('/').pop() as string;
				if (httpHelper.noTokenUrls.includes(last)) {
					if (request.headers.has('Authorization')) {
						request.headers.delete('Authorization');
					}
				} else {
					const token = httpHelper.getLsToken();
					if (token) {
						request.headers.set('Authorization', `Bearer ${token}`);
					}
				}
			}
		],
		beforeError: [
			async (error) => {
				const { response } = error;
				if (response && response.body) {
					// 402 Payment needed
					// if (response.status === 402 || response.status === 400) {
					//   const failedResponse = response.clone();
					//   const result = await failedResponse.json();
					//   if (result.invoiceLink) {
					//     try {
					//       window.Telegram.WebApp.openInvoice(result.invoiceLink)
					//     }
					//     catch (err) {
					//       console.log("Invoice handle error", err);
					//     }
					//   }
					// }
				}
				return error;
			}
		]
	}
});

//TODO: We can also add auth header on instance creation
export default http;
