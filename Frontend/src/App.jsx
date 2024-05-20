import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import { UserProvider } from '../src/UserContext'
import { SnackbarProvider } from 'notistack'
import Contact from './Components/Contact'
import Signupp from './Components/Signupp'
import About from './Components/About'
import Features from './Components/Features'
import Addprofile from './Components/Addprofile'

const App = () => {
  return (
    <div>
          <SnackbarProvider>
      <BrowserRouter>
      <Navbar/>
      <UserProvider>
      <Routes>
      <Route path='/' element={<Home />}/> 
      <Route path='/Signup' element={<Signup/>}/> 
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
     
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Signupp' element={<Signupp/>}/>
      <Route path='/Features' element={<Features/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Addprofile' element={<Addprofile/>}/>
      </Routes>
      </UserProvider>

      </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App
