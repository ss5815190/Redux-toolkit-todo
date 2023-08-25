import { configureStore } from '@reduxjs/toolkit';
import todoListSlice from './todoSlice';

const store = configureStore({
  reducer: { todoListSlice: todoListSlice.reducer },
});

export default store;
