import NetworkService from '../serviceBase';

class ServiceUser extends NetworkService {
	constructor(baseURL, onUnauthenticated) {
		super(baseURL, onUnauthenticated);
	}
	getUserInfo = async () => {
		const url = '/User';
		try {
			const response = await this.instance.get(url);
			return response;
		} catch (error) {
			console.error('Error fetching User info:', error);
			throw error;
		}
	};
	createUser = async (data) => {
		console.log(data);
		const url = '/User';
		try {
			const response = await this.instance.post(url, data);
			return response;
		} catch (error) {
			console.error('Error creating User:', error);
			throw error;
		}
	};
}

export { ServiceUser };
