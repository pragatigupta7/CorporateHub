import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import Home2 from './Components/Home2'
import Manageuser from './Components/Manageuser'
import ManageProfiles from './Components/ManageProfiles'
import ProfileList from './Components/ProfileList'
import View from './Components/View'
import Admin from './Components/Admin/Index'
import Dashboard from './Components/Admin/dashboard'
import EditPage from './Components/EditPage'
import Viewpage from './Components/Viewpage'
import Button from './Components/Button'
import Forgot from './Components/Forgot'

const App = () => {
  return (
    <div>
          <SnackbarProvider>
      <BrowserRouter>
      <Navbar/>
      <UserProvider>
      <Routes>
      <Route path='/' element={<Home2 />}/> 
      <Route path='/Signup' element={<Signup/>}/> 
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
     
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/EditPage' element={<EditPage/>}/>
      <Route path='/Signupp' element={<Signupp/>}/>
      <Route path='/Features' element={<Features/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Addprofile' element={<Addprofile/>}/>
      <Route path='/Home2' element={<Home2/>}/>
      <Route path='/Manageuser' element={<Manageuser/>}/>
      <Route path='/ManageProfiles' element={<ManageProfiles/>}/>
      <Route path='/ProfileList' element={<ProfileList/>}/>
      <Route path='/View/:id' element={<View/>} />
      <Route path='/Dashboard' element={<Dashboard/>} />
      <Route path='/Viewpage/:id' element={<Viewpage/>} />
      <Route path='/Button' element={<Button/>} />
      <Route path="Forgot" element={<Forgot/>} />


      <Route path='/Admin' element={<Admin/>}>
      {/*<Route path='dashboard' element={<Dashboard/>} />*/}

              </Route>




            </Routes>
          </UserProvider>

        </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App
