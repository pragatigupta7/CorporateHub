import React, { useState } from 'react'
import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack'


const Addprofile = () => {
  const [selFile, setSelFile] = useState("")
  const Addprofile = useFormik({
    initialValues: {
      name: '',
      email: '',
      companyname: '',
      description: '',
      image: '',
      contactnumber: ''
     
    
    },
    onSubmit: async (values, action) => {
      values.image = selFile;
      console.log(values);
      const res = await fetch('http://localhost:5000/addprofile/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()
      if (res.status === 200) {
        enqueueSnackbar('Addprofile successful', { variant: 'success' })
      } else {
        enqueueSnackbar('Addprofile failed', { variant: 'error' })
      }
    },
  })
  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (!File) return;
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status == 200) {
        console.log("uploaded file");
      }
    });

  };


  return (
    <div>
      <>
        {/* component */}
        <div className="flex justify-center items-center w-screen h-screen bg-white">
          {/* COMPONENT CODE */}
          <div className="container mx-auto my-4 px-4 lg:px-20 ">
            <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-blue-950">
              <div className="flex">
                <h1 className="font-bold uppercase text-5xl">
                  Add your <br /> Company Profile
                </h1>
              </div>
              <form action="" onSubmit={Addprofile.handleSubmit}>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" id="name" onChange={Addprofile.handleChange} value={Addprofile.values.name}
                    placeholder="Name*"
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email" id="email" onChange={Addprofile.handleChange} value={Addprofile.values.email}
                    placeholder="Email*"
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" id="companyname" onChange={Addprofile.handleChange} value={Addprofile.values.companyname}
                    placeholder="Company Name*"
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number" id="contactnumber" onChange={Addprofile.handleChange} value={Addprofile.values.contactnumber}
                    placeholder="Phone*"
                  />
                </div>
                <div className=" max-w-xs">
                  <label for="example1" class="mb-1 block text-sm font-medium text-gray-700">Upload file</label>
                  <input type="file"
                      id="image"  onChange={uploadFile}  className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-teal-500 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-teal-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60" />
                </div>
                <div className="my-4">
                  <textarea
                    placeholder="Message*" id="description" onChange={Addprofile.handleChange} value={Addprofile.values.description}
                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    defaultValue={""}
                  />
                </div>
                <div className="my-2 w-1/2 lg:w-1/4">
                  <button type='submit'
                    className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                focus:outline-none focus:shadow-outline"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

           
          </div>
        
        </div>
       
      </>

    </div>
  )
}

export default Addprofile
