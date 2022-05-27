import React, { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import ToDos from './components/Todos';
import todo from './models/todo';

function App() {

  const [todos, setTodos] = useState<todo[]>([]);

  const addTaskHandler = (todoText: string) => {
    const newTask = new todo(todoText);

    setTodos((prevTask) => {
      return prevTask.concat(newTask);
    });
  };

  const deleteTaskHandler = () => {

  };

  return (
    <div className="my-5 mx-5 border">
      <div className="m-5">
        <NewTodo onAddTask={addTaskHandler} />
        <ToDos items={todos} />
      </div>
    </div>
  );
}

export default App;
