/* eslint-disable max-len */
import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { todoListAction } from './store/todoSlice';

function App() {
  const todoList = useSelector((state) => state.todoListSlice);
  const dispatch = useDispatch();
  const handleAddTodo = (text) => {
    dispatch(todoListAction.addTodo(text));
  };

  const handleToggleTodo = (id) => {
    dispatch(todoListAction.toggleTodo(id));
  };
  const handleDelTodo = (id) => {
    dispatch(todoListAction.delTodo(id));
  };
  console.log(todoList);
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
          // eslint-disable-next-line max-len
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.text}
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
