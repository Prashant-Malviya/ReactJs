
import { useState } from 'react';
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0)

  // let counter = 0;

  const stopValue = (counter)=>{
    if(counter >= 20) {
      button.disabled = true;
    }else if(counter < 0) {
      button.disabled = true;
    }else {
      setCounter(counter+1);
    }
  }
  
  const addValue = ()=>{
    stopValue(counter)
  }

  const removeValue = ()=>{
    counter -= 1;
    stopValue(counter)
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button> <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <footer>Footer {counter}</footer>
    </>
  )
}

export default App
