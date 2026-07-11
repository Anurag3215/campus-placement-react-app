import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddStudent from './compenents/AddStudent'
import SearchRegistration from './compenents/SearchRegistration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
<AddStudent/>
<SearchRegistration/>
<DeleteRegistration/>
      
    </>
  )
}

export default App
