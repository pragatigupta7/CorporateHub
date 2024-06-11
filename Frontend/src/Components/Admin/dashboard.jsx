import React from 'react'
import { ReactTyped } from "react-typed";
 
const Dashboard = () => {
  return (
    <div className='text-center text-indigo-600 py-[120px] '>
      <h1 className='font-serif text-2xl md:text-8xl  mb-5'>Admin Panel</h1>
      <h2 className='font-bold text-3xl md:text-4xl my-2 '>Empowering Innovation, Connecting Success</h2>
      <p className='text-2xl md:text-3xl my-4 mb-10'>
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