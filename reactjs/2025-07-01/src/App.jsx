import { useReducer } from 'react';

const reducer = (a, b) => {
    if (b.type === 'count/increase') return { ...a, count: a.count + 1 };
    if (b.type === 'count/decrement') return { ...a, count: a.count - 1 };
    if (b.type === 'name/change') return { ...a, name: b.value };
    return a;
};

function App() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        name: ''
    });

    const onIncrease = () => {
        dispatch({ type: 'count/increase' });
    };

    const onDecrease = () => {
        dispatch({ type: 'count/decrement' });
    };

    const onChange = (e) => {
        dispatch({ type: 'name/change', value: e.target.value });
    };

    return (
        <>
            <h1>count: {state.count}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <input value={state.name || ''} onChange={onChange} />
        </>
    );
}
export default App;
