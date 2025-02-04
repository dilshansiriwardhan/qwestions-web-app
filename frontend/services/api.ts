import axios from 'axios';

const api = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api`,
	headers: {
		'Content-Type': 'application/json',
	},
});

// If want to authenticate the request
// const api = createApiClient(token); whenever want use this insted of above api
export const createApiClient = (token: string) => {
	const api = axios.create({
		baseURL: `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api`,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	return api;
};

export default api;
