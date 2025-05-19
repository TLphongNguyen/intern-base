import axios from 'axios';

const TIMEOUT = 1 * 60 * 100000;

class Servicebase {
	constructor(baseURL = '', onUnauthenticated) {
		const instance = axios.create({
			baseURL,
			timeout: TIMEOUT,
			headers: {
				'Content-Type': 'application/json',
				csrf: 'token',
				'Access-Control-Allow-Origin': '*',
			},
		});

		instance.interceptors.request.use(this.requestSuccess);
		instance.interceptors.response.use(this.handleSuccess, this.handleError);
		this.instance = instance;
		this.onUnauthenticated = onUnauthenticated;
	}

	requestSuccess(config) {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	}

	handleSuccess(response) {
		return response.data;
	}

	handleError = (error) => {
		switch (error?.response?.status) {
			case 401:
			case 403:
				this.onUnauthenticated();
				break;
			default:
				break;
		}
		return Promise.reject(error);
	};

	async request(config) {
		return this.instance(config);
	}

	async get(url, config = {}) {
		return this.request({ method: 'GET', url, ...config });
	}

	async post(url, data = {}, config = {}) {
		return this.request({ method: 'POST', url, data, ...config });
	}

	async put(url, data = {}, config = {}) {
		return this.request({ method: 'PUT', url, data, ...config });
	}

	async delete(url, config = {}) {
		return this.request({ method: 'DELETE', url, ...config });
	}
}

export default Servicebase;
