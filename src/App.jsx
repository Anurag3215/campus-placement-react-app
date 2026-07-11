import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddRegistration from './components/AddRegistration'
import SearchRegistration from './components/SearchRegistration'
import DeleteRegistration from './components/DeleteRegistration'
import ViewRegistration from './components/ViewRegistration'

function App() {

  return (
    <>

<BrowserRouter>

<Routes>

<Route path='/' element={<AddRegistration/>}/>
<Route path='/search' element={<SearchRegistration/>}/>
<Route path='/delete' element={<DeleteRegistration/>}/>
<Route path='/view' element={<ViewRegistration/>}/>

</Routes>

</BrowserRouter>

    </>
  )
}

export default App
