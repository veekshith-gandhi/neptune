import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Promise from 'redux-promise-middleware';

import rootReducer from './reducers';

const persistedReducer = persistReducer({ key: 'root', storage }, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [Promise],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
