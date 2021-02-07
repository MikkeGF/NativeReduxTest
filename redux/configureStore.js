import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { counterSlice } from './CounterSlice';

const store = configureStore({
    reducer: counter,
    middleware: [...getDefaultMiddleware({thunk: false})]
  })

export default store;