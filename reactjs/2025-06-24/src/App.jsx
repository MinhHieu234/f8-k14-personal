import './App.css';
import { memo, useState, useMemo,useCallback } from 'react';
const Com1 = memo(() => {
    console.log('render com1');
    return <h1>Component 1</h1>;
});
const Com2 = memo(({ count }) => {
    console.log('render com2');
    return <h2>Component 2</h2>;
});
function App() {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(0);
    const [input,setInput]=useState('')
const log= useCallback(()=>{
    console.log('abc',age);
},[age])
    const getSum = (n) => {
        let val = 0;
        for (let i = 0; i < 100000 + n; i++) {
            val += i;
        }
        return val;
    };
    // const sum = useMemo(() => getSum(count), [count]);
    log()
    return (
        <>
            <Com1/>
            <Com2 count={count}/>
            <p>sum: {sum}</p>
            <p>age: {age}</p>
            <button onClick={() => setCount(count + 1)}>count</button>
            <button onClick={() => setAge(age + 1)}>age</button>
            <input value={input} onChange={e=>setInput(e.target.value)}/>
        </>
    );
}
export default App;
