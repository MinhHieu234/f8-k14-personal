import React from 'react';
import TodoItem from './TodoItem';
function TodoList({ todos, onDelete, onUpdate, onToggle }) {
    return (
        <div className="todo-list">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}
export default TodoList;
