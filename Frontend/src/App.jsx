import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}/> 
      <Route path='/Signup' element={<Signup/>}/> 
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Navbar' element={<Navbar/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
