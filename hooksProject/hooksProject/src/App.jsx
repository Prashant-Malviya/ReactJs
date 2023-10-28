import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter,setCounter] =  useState(0)

  // let counter = 53;
  const addValue = ()=>{
    
    counter += 1;
    setCounter(counter)
    if(counter >= 20) {
      alert("sorry you can't move further");
      document.getElementById("btn1").disabled = true;
    }
    
    console.log('value added',counter)
  }

  const removeValue = ()=>{
    
    if(counter <= 0){
      alert("Sorry you can't go less than one");
      document.getElementById("btn2").disabled = true;
    }
    else {
      setCounter(counter-1);
    }
    
  }

  return (
    <>
      <h1>Js Aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button id = "btn1" 
      onClick={addValue}>Added value {counter}</button>
      <br />
      <button id = "btn2" onClick={removeValue}>Remove Value {counter}</button>

      <p onClick={addValue}>footer  {counter}</p>
    </>
  )
}

export default App
