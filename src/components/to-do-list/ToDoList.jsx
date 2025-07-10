import React from 'react';
import './ToDoList.css';

export default function ToDoList({ todos, onToggle }) {
  return (
    <div className="todo-container">
      <h1 className="todo-title">Ma ToDo List</h1>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <label className="todo-label">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span
                className="todo-text"
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
              >
                {todo.title}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
