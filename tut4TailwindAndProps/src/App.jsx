import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName : 'prashant',c
    age : 25
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-2xl mb-5'>Tailwind Test</h1>
     <Card name ='prashant' btnText="click me"/>
     <Card name='krishna'/>
    </>
  )
}

export default App
