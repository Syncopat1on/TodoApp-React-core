import React from 'react';

export default function TasksFilter({ currentFilter, onFilterChange }) {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'active', label: 'Active' },
    { id: 'completed', label: 'Completed' },
  ];

  return (
    <ul className="filters">
      {filters.map(filter => (
        <li key={filter.id}>
          <button
            className={currentFilter === filter.id ? 'selected' : ''}
            onClick={() => onFilterChange(filter.id)}
          >
            {filter.label}
          </button>
        </li>
      ))}
    </ul>
  )
};