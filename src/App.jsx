import React, { useState } from 'react';
import ToDoList from './components/to-do-list/ToDoList';
import './App.css';

function App({ todos }) {
  const [currentTodos, setCurrentTodos] = useState(todos || []);

  const toggleCompleted = (id) => {
    setCurrentTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return <ToDoList todos={currentTodos} onToggle={toggleCompleted} />;
}

export default App;
