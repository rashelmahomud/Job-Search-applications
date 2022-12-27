import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import apiSlice from '../features/api/apiSlice';
import authSlice from '../features/auth/authSlice';

export const store = configureStore({
  [apiSlice.reducerPath]: apiSlice.reducer,
  reducer: {

    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) => {
    getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
