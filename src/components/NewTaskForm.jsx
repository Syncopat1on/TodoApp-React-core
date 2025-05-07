import React from 'react';
import { useState } from 'react';

export default function NewTaskForm({ onAddTask }) {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTask(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
      />
    </form>
  )
};