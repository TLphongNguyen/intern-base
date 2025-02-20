import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './components/globalstyle/index.js';
import App from './App.jsx';
import { store } from './Redux/store.js';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<GlobalStyle>
				<App />
			</GlobalStyle>
		</Provider>
	</StrictMode>,
);
