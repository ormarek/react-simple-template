import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

const storeConfig = {
  devTools: process.env.NODE_ENV === 'development',
  reducer: rootReducer,
};

export const store = configureStore(storeConfig);

export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppDispatch = typeof store.dispatch

export * from './actions';
export * from './selectors'
