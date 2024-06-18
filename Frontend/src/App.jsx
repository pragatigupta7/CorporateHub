import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import { SnackbarProvider } from 'notistack'
import Contact from './Components/Contact'
import Signupp from './Components/Signupp'
import About from './Components/About'
import Features from './Components/Features'
import Addprofile from './Components/Addprofile'
import Home2 from './Components/Home2'
import ProfileList from './Components/ProfileList'
import View from './Components/View'
import Admin from './Components/Admin/Index'
import EditPage from './Components/EditPage'
import Viewpage from './Components/Viewpage'
import Button from './Components/Button'
import Forgot from './Components/Forgot'
import Dashboard from './Components/Admin/dashboard'
import Manageuser from './Components/Admin/Manageuser'
import ManageProfiles from './Components/Admin/ManageProfiles'
import { AppProvider } from './AppContext'
import Feedback from './Components/Feedback'
import UserProfile from './Components/UserProfile'
import AdminAuth from './AdminAuth'
import UserAuth from './UserAuth'

const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <BrowserRouter>
          <AppProvider>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home2 />} />
              <Route path='/Signup' element={<Signup />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/Feedback' element={<UserAuth><Feedback /></UserAuth>} />

              <Route path='/Contact' element={<UserAuth><Contact /></UserAuth>} />
              <Route path='/EditPage' element={<EditPage />} />
              <Route path='/Signupp' element={<Signupp />} />
              <Route path='/Features' element={<Features />} />
              <Route path='/About' element={<About />} />
              <Route path='/Addprofile' element={<Addprofile />} />
              <Route path='/Home2' element={<Home2 />} />
              <Route path='/ProfileList' element={<ProfileList />} />
              <Route path='/View/:id' element={<View />} />
              <Route path='/Viewpage/:id' element={<UserAuth><Viewpage /></UserAuth>} />
              <Route path='/Button' element={<Button />} />
              <Route path="/Forgot" element={<Forgot />} />
              <Route path="/UserProfile" element={<UserProfile />} />
              


              <Route path='/Admin' element={<Admin />}>
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='Manageuser' element={<Manageuser />} />
                <Route path='ManageProfiles' element={<ManageProfiles />} />


              </Route>




            </Routes>
          </AppProvider>

        </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App
