import { configureStore } from '@reduxjs/toolkit';
import exchangeReducer from '../features/exchangeSlice';

export const store = configureStore({
  reducer: {
    exchange: exchangeReducer,
  },
});
