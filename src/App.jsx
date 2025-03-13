import { useState } from 'react'
import Header from './components/header/Header'
import SectionOne from './components/firstsection/SectionOne'
import SectionTwo from './components/sectionTwo/SectionTwo'
import SectionThree from './components/sectionThree/SectionThree'
import SectionFour from './components/sectionFour/SectionFour'
import SectionFive from './components/sectionFive/SectionFive'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </main>
    </>
  )
}

export default App
