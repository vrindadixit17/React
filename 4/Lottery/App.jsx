import { useState } from 'react'
import Lottery from './Lottery'
import './App.css'

function App() {

  return (
    <>
      <Lottery n={3} winningSum={15} />
    </>
  )
}

export default App
