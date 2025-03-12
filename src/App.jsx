import { useState } from 'react'
import Header from './components/header/Header'
import SectionOne from './components/firstsection/SectionOne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <SectionOne />
      </main>
    </>
  )
}

export default App
