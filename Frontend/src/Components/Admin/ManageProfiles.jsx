import React, { useState, useEffect } from 'react'
import { enqueueSnackbar } from 'notistack'

const ManageProfiles = () => {
    const [Data, setData] = useState([])
    const fetchUserData = async () => {
      const res = await fetch('http://localhost:5000/profile/getall',)
      console.log(res.status)
      if (res.status === 200) {
        const data = await res.json()
        console.log(data)
        setData(data)
      }
    }
    const deleteUser = async (id) => {
      console.log(id);
      const res = await fetch("http://localhost:5000/profile/delete/" + id, {
        method: "DELETE"
      })
      console.log(res.status);
      if (res.status === 200) {
        enqueueSnackbar("user deleted successfully", { variant: "success" })
        fetchUserData();
      } else {
        enqueueSnackbar("something went wrong", { variant: "error" })
      }
    }
    useEffect(() => {
      fetchUserData()
    }, [])
    const displayUsers = () => {
        return Data.map((profile) => {
            return <tr className="border-b hover:bg-orange-100">
            <td className="p-3 px-5">
            <td>{profile.name}</td>
            </td>
            <td className="p-3 px-5">
            <td>{profile.email}</td>
            </td>
            <td className="p-3 px-5">
            <td>{profile.companyname}</td>
            </td>
            <td className="p-3 px-5 flex justify-end">
              <button
                type="button"
                className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
              <button
                type="button" onClick={e => deleteUser(profile._id)}
                className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                Delete
              </button>
            </td>
          </tr>
 })
}

  return (
    <div>
      <>
 
  <div className="text-gray-900 bg-blue-950">
    <div className="p-4 flex">
      <h1 className="text-3xl text-gray-50">Manage Profiles</h1>
    </div>
    <div className="px-3 py-4 flex justify-center">
      <table className="w-full text-md bg-white shadow-md rounded mb-4">
        <thead>
          <tr className="border-b">
            <th className="text-left p-3 px-5">Name</th>
            <th className="text-left p-3 px-5">Email</th>
            <th className="text-left p-3 px-5">Company Name</th>
            <th className="text-left p-3 px-5">Contact Number</th>
            <th />
          </tr></thead>
          
          
          
         
         
     
         <tbody>
          {displayUsers()}
          </tbody>
      </table>
    </div>
  </div>
</>

    </div>
  )
}

export default ManageProfiles
