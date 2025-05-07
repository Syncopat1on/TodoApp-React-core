import React from 'react';
import { useState } from 'react';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './style.css';

export function App() {
  const [tasks, setTasks] = useState([
    {id: 1, text:'Сходить покушать', completed: true,  createdAt: new Date(Date.now() - 1000)},
    {id: 2, text: 'Выкурить цыбарку', completed: false,  createdAt: new Date(Date.now() - 200000)},
  ]);
  const [filter, setFilter] = useState('all');

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const filteredTasks = tasks?.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const activeTasksCount = tasks.filter(task => !task.completed).length;

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onAddTask={addTask} />
      </header>
      <section className="main">
        <TaskList 
          tasks={filteredTasks} 
          onToggle={toggleTask} 
          onDelete={deleteTask}
          onEdit={editTask} 
        />
        <Footer 
          activeTasksCount={activeTasksCount}
          currentFilter={filter}
          onFilterChange={setFilter}
          onClearCompleted={clearCompleted}
        />
      </section>
    </section>
  )
};

export default App;