import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from './store/Count/index.js';
function App() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);
    const onclick = () => {
        dispatch(increase());
    };
    return (
        <>
            <h1>count: {count}</h1>
            <button onClick={onclick}>+</button>
        </>
    );
}
export default App;