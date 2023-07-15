import { configureStore } from '@reduxjs/toolkit';
import exchangeReducer from '../features/exchangeSlice';
import tabSliceReducer from '../features/tabSlice';
export const store = configureStore({
  reducer: {
    exchange: exchangeReducer,
    tab: tabSliceReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});
