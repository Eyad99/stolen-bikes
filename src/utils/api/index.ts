import axios, { AxiosInstance, AxiosResponse } from 'axios';
  
const baseURL = import.meta.env.VITE_BASE_URL;

 export interface ApiResponse<T = any> {
	data: T;
	code: number;
	message: string;
}

const api: AxiosInstance = axios.create({
	baseURL,
	timeout: 180000,
	headers: {
		Accept: 'application/json',
	},
});

api.interceptors.request.use(
	(config: any) => {
 		return config;
	},
	(error) => Promise.reject(error)
);

api.interceptors.response.use(
	(response: AxiosResponse<ApiResponse | any>) => response,
	(error) => {
		if (error.response) {
			if (error.response.status === 401) {
				// window.location.href = '/not-found';
		
			} else {
				// Handle other response errors

				console.error('Error: elseee', error.message);
			}
		} else if (error.request) {
			// Handle request error
			console.error('Request error:', error.request);
		} else {
			// Handle other errors
			console.error('Error:', error.message);
		}

		return Promise.reject(error?.response?.data);
	}
);

export const { get, post, put, delete: destroy, patch } = api;
