import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo-removebg-preview.png"
import useAppContext from '../AppContext'

const Navbar = () => {
  const isLoggedIn = sessionStorage.getItem('user');
  const [currentUser, setCurrentUser] = useState(null);

  const { logout, loggedIn, setLoggedIn } = useAppContext();

  console.log(isLoggedIn);


  const showLoginOption = () => {

    if (isLoggedIn) {
      return (
        // <button type="submit" className='login-container' >
        // <div className="dropdown">
        //   <button className="dropbtn login-container" >{currentUser.}</button>
        //   <div className="dropdown-content">
        <button className="login-container btn" style={{ color: 'red' }} onClick={logout} >
          Logout
        </button>

        //   </div>
        // </div>
      )
    }
    else {
      return (
        <div className='flex'>
          <Link
            to="/Signupp"
            className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
          >
            Sign in
          </Link>
          <Link
            to="/Login"
            className=" block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
          >
            login
          </Link>
        </div>
      )
    }
  }

  console.log(isLoggedIn);
  return (
    <div>
      <>
        {/* component */}
        <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
          <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
            <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
              <Link to='/Admin/Dashboard'>
              <img
                src={logo}
                alt="aji"
                className="object-cover mx-auto w-8 h-8 rounded-full w-10 h-10"
              />
              </Link>
              <span className="font-semibold text-xl tracking-tight">Corporate Hub</span>
            </div>
            <div className="block lg:hidden ">
              <button
                id="nav"
                className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
            <div className="text-md font-bold text-blue-700 lg:flex-grow">
              <Link
                to="/Home2"
                className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
              >
                Home
              </Link>
              <Link
                to="/About"
                className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
              >
                About
              </Link>
              <Link
                to="/Features"
                className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
              >
                Features
              </Link>
              <Link
                to="/Contact"
                className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
              >
                Contact
              </Link>
              <Link
                to="/EditPage"
                className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
              >
                Add Company Profile
              </Link>

            </div>

      
              {showLoginOption()}
          
          </div>
        </nav>
      </>


    </div>
  )
}

export default Navbar
