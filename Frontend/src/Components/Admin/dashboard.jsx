import React from 'react'
import { ReactTyped } from "react-typed";
 
const Dashboard = () => {
  return (
    <div className="text-center text-indigo-700 py-[220px]  bg-[url('https://img.freepik.com/premium-vector/abstract-wave-line-colorful-geometric-landing-page-flat-background_650461-774.jpg')] bg-cover">
      <h1 className='font-serif text-2xl md:text-7xl  mb-5 text-white'>Welcome To The Admin Panel</h1>
      <h2 className='font-bold text-3xl md:text-4xl my-2 text-white'>Empowering Innovation, Connecting Success</h2>
      <p className='text-2xl md:text-3xl my-4 mb-10 text-white'>
        <ReactTyped
          className='pl-3'
          strings={["Your Gateway to Business Excellence", "Collaborate. Innovate. Succeed.", "Where Innovation Meets Opportunity", "Catalyst for Corporate Growth"]}
          typeSpeed={120}
          backSpeed={50}
          loop={true}
        /></p>


    

    </div>
  )
}

export default Dashboard