import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: v4(), text: action.payload, date: Date(), completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    delTodo: (state, action) => state.filter((todo) => todo.id !== action.payload),
  },
});

export const todoListAction = todoListSlice.actions;
export default todoListSlice;
