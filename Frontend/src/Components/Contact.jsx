import React from 'react'
import { enqueueSnackbar } from 'notistack';

import { useFormik } from 'formik'
import * as Yup from 'yup'
import contact from "../assets/Contact.mp4"

const Contactschema = Yup.object().shape({
  name: Yup.string()
    .required('Name id required')
    .min(3, 'Name must be at least 3 characters')
    .max(15, 'Name must be at most 15 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  phone: Yup.string()
    .required('Phonenumber is required'),
  message: Yup.string()
    .required('Message is Required')
    .min(3, 'Message must be  at least 8 characters')
    .max(100, 'Message must be at most 15 characters'),
  subject: Yup.string()
    .required('subject is required')
})


const Contact = () => {
  const Contactform = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      phone: '',
      message: ''
    },
    //step5: validation schema
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch('http://localhost:5000/contact/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()

      if (res.status === 200) {
        enqueueSnackbar('Thank you', { variant: 'success' })
      } else {
        enqueueSnackbar('uppsss', { variant: 'error' })
      }
    },
    validationSchema: Contactschema
  })
  return (
    <div>
  <section className="bg-white bg-cover bg-[url('https://mlsam9dnhlva.i.optimole.com/SR1rhSw-0PGs11gD/w:auto/h:auto/q:auto/https://www.idigitalstrategies.com/wp-content/uploads/homebanner-compressed.jpg')] ">
  
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
      Contact Us
    </h2>
    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
      Got a technical issue? Want to send feedback about a beta feature? Need
      details about our Business plan? Let us know.
    </p>
    <form action="#" className="space-y-8" onSubmit={Contactform.handleSubmit}>
    <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          YOUR NAME 
        </label>
        <span style={{ color: 'red', fontSize: '10' }}>{Contactform.touched.name && Contactform.errors.name}</span>
        <input
          type="text"
          id="name"  onChange={Contactform.handleChange}
          value={Contactform.values.name}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="name*"
          required=""
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Your email
        </label>
        <span style={{ color: 'red', fontSize: '10' }}>{Contactform.touched.email && Contactform.errors.email}</span>
        <input
          type="email"
          id="email" onChange={Contactform.handleChange}
          value={Contactform.values.email}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="name@flowbite.com"
          required=""
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          YOUR PHONE NUMBER 
        </label>
        <span style={{ color: 'red', fontSize: '10' }}>{Contactform.touched.phone && Contactform.errors.phone}</span>
        <input
          type="text"
          id="phone" onChange={Contactform.handleChange}
          value={Contactform.values.phone}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="name@flowbite.com"
          required=""
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Subject
        </label>
        <span style={{ color: 'red', fontSize: '10' }}>{Contactform.touched.subject && Contactform.errors.subject}</span>
        <input
          type="text"
          id="subject"onChange={Contactform.handleChange}
          value={Contactform.values.subject}
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="Let us know how we can help you"
          required=""
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Your message
        </label>
        <span style={{ color: 'red', fontSize: '10' }}>{Contactform.touched.message && Contactform.errors.message}</span>
        <textarea
          id="message"onChange={Contactform.handleChange}
          value={Contactform.values.message}
          rows={6}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Leave a comment..."
          defaultValue={""}
        />
      </div>
      <button
        type="submit"
        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Send message
      </button>
    </form>
  </div>
</section>


    </div>
  )
}

export default Contact
