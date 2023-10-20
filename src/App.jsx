import React, { useCallback } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { todoListAction } from './store/todoSlice';

function App() {
  const todoList = useSelector((state) => state.todoListSlice);
  const dispatch = useDispatch();

  const handleAddTodo = useCallback((text) => {
    dispatch(todoListAction.addTodo(text));
  }, [dispatch]);

  const handleToggleTodo = useCallback((id) => {
    dispatch(todoListAction.toggleTodo(id));
  }, [dispatch]);

  const handleDelTodo = useCallback((id) => {
    dispatch(todoListAction.delTodo(id));
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddTodo(e.target.value);
            e.target.value = '';
          }
        }}
      />
      <ul>
        {todoList.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            <button
              className="todoText"
              type="button"
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </button>
            <ul>
              {` date${todo.date}`}
              <button type="button" onClick={() => handleDelTodo(todo.id)}>del</button>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
