import React from 'react'
import { Link} from 'react-router-dom'
import logo from "../assets/Logo-removebg-preview.png"

const Navbar = () => {
  return (
    <div>
      <header className="bg-white">
  <nav className="flex justify-between items-center w-[92%]  mx-auto">
    <div>
      <img
        className="w-16 cursor-pointer"
        src={logo}
        alt="..."
      />
    </div>
    <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
      <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
        <li>
          <Link className="hover:text-gray-500" to="/About">
           About
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-500" to="/Features">
           Features
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-500" to="#">
            Pages
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-500" to="/Contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-500" to="/Home2">
            Home
          </Link>
        </li>
      </ul>
    </div>
    <div className="flex items-center gap-6">
      <Link to="/Signupp" className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
        Sign in
      </Link>
      <ion-icon
        onclick="onToggleMenu(this)"
        name="menu"
        className="text-3xl cursor-pointer md:hidden"
      />
    </div>
  </nav>
</header>

    </div>
  )
}

export default Navbar
