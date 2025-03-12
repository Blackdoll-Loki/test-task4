import { useState } from 'react'
import Header from './components/header/Header'
import SectionOne from './components/firstsection/SectionOne'
import SectionNumbers from './components/section-numbers/SectionNumbers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <SectionOne />
        <SectionNumbers />
      </main>
    </>
  )
}

export default App
