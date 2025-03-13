import { useState } from 'react'
import Header from './components/header/Header'
import SectionOne from './components/firstsection/SectionOne'
import SectionNumbers from './components/section-numbers/SectionNumbers'
import SectionThree from './components/sectionThree/SectionThree'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <SectionOne />
        <SectionNumbers />
        <SectionThree />
      </main>
    </>
  )
}

export default App
