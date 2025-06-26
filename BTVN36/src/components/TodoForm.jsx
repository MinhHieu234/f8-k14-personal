import React, { useRef, useState } from 'react';

function TodoForm({ onAdd }) {
    const [input, setInput] = useState('');
    const inputRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onAdd(input);
        setInput('');
        inputRef.current.focus();
    };

    return (
        <form className="add-todo" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input"
                placeholder="What is the task today?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                ref={inputRef}
            />
            <button type="submit" className="add-btn">Add Task</button>
        </form>
    );
}

export default TodoForm;
