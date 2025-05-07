import React from 'react';
import TasksFilter from './TasksFilter';

export default function Footer({ activeTasksCount, currentFilter, onFilterChange, onClearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">{activeTasksCount} items left</span>
      <TasksFilter currentFilter={currentFilter} onFilterChange={onFilterChange} />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  )
};