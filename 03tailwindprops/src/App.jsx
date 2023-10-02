import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
let myObj = {
  place: "Hyderabad",
  pincode: "500089",
}

  return (
    <>
    <h1 className='text-3xl bg-green-500 p-3'>Vite with Tailwind</h1>
    <Card name="Vishal" post="SDE" details={myObj} />
    <Card />
    <Card />
    <Card />
    </>
  )
}

export default App
