import React from 'react';
import { useState, useEffect } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default function Task({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  useEffect(() => {
    setEditText(task.text);
  }, [task.text]);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const trimmedText = editText.trim();
    if (trimmedText && trimmedText !== task.text) {
      onEdit(task.id, trimmedText);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEditSubmit(e);
    } else if (e.key === 'Escape') {
      setEditText(task.text);
      setIsEditing(false);
    }
  };

  return (
    <li className={`${task.completed ? 'completed' : ''} ${isEditing ? 'editing' : ''}`}>
      <div className="view">
        <input 
          className="toggle" 
          type="checkbox" 
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <label onDoubleClick={() => setIsEditing(true)}>
          <span className="description">{task.text}</span>
          <span className="created">
            created {formatDistanceToNow(task.createdAt, { addSuffix: true })}
          </span>
        </label>
        <button 
          className="icon icon-edit" 
          onClick={() => setIsEditing(true)}
          aria-label="Edit"
        />
        <button 
          className="icon icon-destroy" 
          onClick={() => onDelete(task.id)}
          aria-label="Delete"
        />
      </div>
      {isEditing && (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            className="edit"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEditSubmit}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </form>
      )}
    </li>
  );
}