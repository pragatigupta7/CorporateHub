import React from 'react'
// import Logo from '../../../public/Top 5.png'
import { RiSchoolLine } from "react-icons/ri";
import { TbUsers } from "react-icons/tb";
import { IoSchoolOutline } from "react-icons/io5";


const Sidebar = () => {
  return (
    <>
    
    <>
  {/* component */}
  <link
    rel="stylesheet"
    href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
  />
  <div className="min-h-screen fixed flex flex-row bg-gray-100">
    <div className="flex flex-col w-56 bg-blue-100 rounded-r-3xl overflow-hidden">
      <div className="flex items-center justify-center h-20">
    {/* <img src={Logo} className='h-20' alt="" /> */}
      </div>
      <ul className="flex flex-col py-4">
        <li>
          <a className=" text-blue-900 font-bold text-xl "
            href="/Admin/Dashboard"
            classname="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-blue-900 hover:text-blue-700"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-blue-900">
              <i className="bx bx-home" />
            </span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
        </li>
        
        
        <li>
          <a classname="text-blue-900 fon-bold text-xl"
            href="/Admin/Manageuser"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-blue-900 hover:text-blue-700"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-blue-900">
            <TbUsers />
            </span>
            <span className="text-sm font-medium">Manage Users</span>
          </a>
        </li>
        <li>
          <a classname="text-blue-900 fon-bold text-xl"
            href="/Admin/ManageProfiles"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-blue-900 hover:text-blue-700"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-blue-900">
            <RiSchoolLine />
            </span>
            <span className="text-sm font-medium">Manage Profiles</span>
          </a>
        </li>
       
        <li>
          <a classname="text-blue-900 fon-bold text-xl"
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-blue-900 hover:text-blue-700"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-blue-900">
              <i className="bx bx-log-out" />
            </span>
            <span className="text-sm font-medium">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</>

    
    </>
  )
}

export default Sidebar