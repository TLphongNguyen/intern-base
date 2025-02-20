import Home from '../Page/Home';
import Products from '../Page/Products';

const publicRouter = [
	{ path: '/', components: Home },
	{ path: '/products', components: Products },
];
export { publicRouter };
