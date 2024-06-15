'use client';
import { useFormik } from 'formik'
import React, { useState } from 'react'

const UserProfile = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const profileForm = useFormik({
    initialValues: currentUser,
    onSubmit: (values) => {
      fetch('http://localhost:5000/user/update/' + currentUser._id, {
        method: 'PUT',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            response.json()
              .then(data => {
                setCurrentUser(data);
                sessionStorage.setItem('user', JSON.stringify(data));
              })
          }
        }).catch((err) => {
          console.log(err);
        });
    }
  })

  return (
    <div>
      <>
        <>
          {/* component */}
          <div className="min-h-screen p-6 bg-gray-200 flex items-center justify-center ">
            <div className="container max-w-screen-lg mx-auto">
              <div>
                <h2 className="font-semibold text-xl text-gray-700">Wellcome back !</h2>
                <p className="text-gray-600 mb-6">
                  Wanted to update your information.
                </p>
                <form onSubmit={profileForm.handleSubmit}>
                  <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                      <div className="text-gray-600">
                        <p className="font-medium text-lg text-black">Personal Details</p>
                        <p>Please fill out all the fields.</p>
                        <br />
                       
                      </div>

                      <div className="lg:col-span-2">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                          <div className="md:col-span-5 text-black">
                            <label htmlFor="full_name" >Full Name</label>
                            <input
                              type="name"
                              name="name"
                              onChange={profileForm.handleChange}
                              value={profileForm.values.name}
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            />
                          </div>
                          <div className="md:col-span-5 text-black">
                            <label htmlFor="email">Email Address</label>
                            <input
                              type="text"
                              name="email"
                              onChange={profileForm.handleChange}
                              value={profileForm.values.address}
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 "
                              
                              placeholder="email@domain.com"
                            />
                          </div>
                          <div className="md:col-span-2 text-black">
                            <label htmlFor="city">City</label>
                            <input
                              type="text"
                              name="city"
                              id="city"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              onChange={profileForm.handleChange}
                              value={profileForm.values.city}
                            />
                          </div>
                          <div className="md:col-span-5 text-right text-black">
                            <div className="inline-flex items-end">
                              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <a
                href="https://www.buymeacoffee.com/dgauderman"
                target="_blank"
                className="md:absolute bottom-0 right-0 p-6 float-right "
              >
                <img
                  src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg"
                  alt="Buy Me A Coffee"
                  className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"
                />
              </a>
            </div>
          </div>
        </>


      </>

    </div>
  )
}

export default UserProfile