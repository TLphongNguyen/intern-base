import Servicebase from '../servicesBase';

class ServiceUser extends Servicebase {
	constructor(baseURL, onUnauthenticated) {
		super(baseURL, onUnauthenticated);
	}
	Login() {
		const url =
			'accessToken?grant_type=password&client_id=1961521961528350196152786046&client_secret=2C91969C08FE597727457D254E4D42B031EAC0C0DBC5F9AAF9472F8FD8A528B873FC3D2AA203F112A2B90D8E74C44414EA409A6E5F04049DEF7AA8DFA7309D0E&username=stnmt_admin&password=123456';
		return this.instance.post(url);
	}
	GetUser(accessToken) {
		const url = '/oauth2.0/profile';
		return this.instance.post(url, null, {
			params: { access_token: accessToken },
		});
	}
}

export default ServiceUser;
