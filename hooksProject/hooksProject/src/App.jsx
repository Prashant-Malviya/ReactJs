import { useState } from 'react'
import './App.css'

function App() {


  let [counter,setCounter] =  useState(0)

  // let counter = 53;
  const addValue = ()=>{
    
    // counter += 1;
    // setCounter(counter)


    // interview question =========---------->

      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);

      // it will only increase by one because we know that diffing algorithm concept fibre github

      // if we wanted to increase at the once and got the resultant output then we can do following

      setCounter((prevCounter) => prevCounter+1); // set function accepts a callback function
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);

    // interview question ----------------

    // if(counter >= 20) {
    //   alert("sorry you can't move further");
    //   document.getElementById("btn1").disabled = true;
    // }
    
    // console.log('value added',counter)
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

//code
