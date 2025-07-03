import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
    const onlick=()=>{
      setCount(count+1)
    }

  return (
      <>
          <h1>count:{count}</h1>
          <button onClick={onlick}>click me </button>
  {/*<h1 style={{color :'red'}}>Abc</h1>*/}
  {/*    <span style={{display :'block'}}>test thoi</span>*/}
  {/*    <span style={{display :'block',backgroundColor:`red`,borderRadius:'50%'}}>test thoi</span>*/}
      </>
  )
}

export default App