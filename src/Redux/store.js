import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { loadingBarMiddleware } from './middlewares/loadingBar';
import { notificationMiddleware } from './middlewares/notification';
import { processing } from './middlewares/Processing';
import { rootReducer } from './rootReducer';

const middleWare = [processing, loadingBarMiddleware, notificationMiddleware];

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middleWare],
});

export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();
