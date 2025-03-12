import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Button from './components/button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
    </>
  )
}

export default App
