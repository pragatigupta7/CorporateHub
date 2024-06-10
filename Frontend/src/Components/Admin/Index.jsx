import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Admin = () => {
  return (
    <>
<div className="">
<Sidebar />
  
</div>
<div className="ms-56">
<Outlet />

</div>
    </>
  )
}

export default Admin