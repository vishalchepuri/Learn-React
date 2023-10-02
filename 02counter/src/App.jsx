import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ counter, setCounter] = useState(15)
  const addValue = () => {
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    setCounter((prevCounter) => prevCounter + 1) 
    setCounter((prevCounter) => prevCounter + 1) 
    setCounter((prevCounter) => prevCounter + 1) 
    setCounter((prevCounter) => prevCounter + 1) 
  }
  const decValue = () =>{
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React course {counter} </h1>
      <h2>Counter value :  {counter} </h2>
      <button
        onClick={addValue}
      >Add value</button>
      <button
        onClick={decValue}
      >Remove value</button>
      <p>footer:{counter} </p>
    </>
  )
}

export default App
