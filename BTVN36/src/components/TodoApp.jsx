import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './TodoApp.css';

const API_URL = 'http://localhost:3000/todos';

function TodoApp() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const res = await axios.get(API_URL);
        setTodos(res.data);
    };

    const addTodo = async (text) => {
        if (!text.trim()) return;
        const res = await axios.post(API_URL, { text, completed: false });
        setTodos([...todos, res.data]);
    };

    const deleteTodo = async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const updateTodo = async (id, updatedText) => {
        const res = await axios.patch(`${API_URL}/${id}`, { text: updatedText });
        setTodos(todos.map(todo => (todo.id === id ? res.data : todo)));
    };

    const toggleComplete = async (id, currentStatus) => {
        const res = await axios.patch(`${API_URL}/${id}`, { completed: !currentStatus });
        setTodos(todos.map(todo => (todo.id === id ? res.data : todo)));
    };

    return (
        <div className="container">
            <h1>Get Things Done!</h1>
            <TodoForm onAdd={addTodo} />
            <TodoList
                todos={todos}
                onDelete={deleteTodo}
                onUpdate={updateTodo}
                onToggle={toggleComplete}
            />
        </div>
    );
}

export default TodoApp;
