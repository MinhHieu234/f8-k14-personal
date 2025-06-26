import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ todo, onDelete, onUpdate, onToggle }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleUpdate = () => {
        onUpdate(todo.id, editText);
        setIsEditing(false);
    };

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id, todo.completed)}
            />
            {isEditing ? (
                <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleUpdate()}
                />
            ) : (
                <div className={`todo-content ${todo.completed ? 'completed' : ''}`}>
                    {todo.text}
                </div>
            )}

            {isEditing ? (
                <button className="edit-btn" onClick={handleUpdate}>OK</button>
            ) : (
                <button className="edit-btn" onClick={() => setIsEditing(true)}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
            )}

            <button className="del-btn" onClick={() => onDelete(todo.id)}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
}

export default TodoItem;
