import Products from '../Page/Products';
import Dashboard from '../Page/dashboard';
import User from '../Page/user';
import Auth from '../Page/Auth';

const publicRouter = [
	{ path: '/products', components: Products },
	{ path: '/', components: Auth, layout: null },
	{ path: '/dashboard', components: Dashboard },
	{ path: '/user', components: User },
];
export { publicRouter };
