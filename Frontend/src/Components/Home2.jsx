import React, { useState } from 'react'
import { ReactTyped } from "react-typed";
import comm from "../assets/community.png"
import mission from "../assets/mission.png"
import pop from "../assets/pop.png"
import vision from "../assets/vision.png"
import bgvideo from "../assets/video.mp4"

const Home2 = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='shadow-md sticky top-0 z-[20] mx-auto w-full '>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
          <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>

            {/*} <h1 className='font-[cursive] relative text-transparent bg-clip-text bg-gradient-to-r from-blue-500  to-pink-500'>FIT FUSION</h1>*/}
          </div>
          <div className='text-3xl cursor-pointer absolute right-8 top-6 md:hidden' onClick={() => setOpen(!open)}>
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>

          </div>

        </div>


      </div>
     {/*} <div className='bg-[url(https://sadiracapitalllc.com/wp-content/uploads/2022/04/atlanta-financial-center-mark-chandler-e1650643630483.jpg)] bg-cover bg-no-repeat bg-scroll   h-[500px] md:h-[700px]'>*/}
    <div className='overflow-x-hidden'> <video className="h-screen w-screen rounded-lg object-cover absolute -z-10" controls autoPlay muted >
      <source src={bgvideo} type="video/mp4" />
          
     
    </video>
    <div className='text-center text-white py-[120px] '>
    <h1 className='font-serif text-2xl md:text-5xl mt-16'>Corporate Hub</h1>
          <h2 className='font-bold text-3xl md:text-4xl my-2 '>Empowering Innovation, Connecting Success</h2>
          <p className='text-2xl md:text-3xl my-4 '>
            <ReactTyped
              className='pl-3'
              strings={["Your Gateway to Business Excellence", "Collaborate. Innovate. Succeed.", "Where Innovation Meets Opportunity", "Catalyst for Corporate Growth"]}
              typeSpeed={120}
              backSpeed={50}
              loop={true}
            /></p>
          <ul >
            <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-500 duration-500 md:my-0 my-7 '>
              Get Started
            </button>
          </ul>
        </div>
        
      </div>
      <section className="bg-dark">
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto p-8 shadow-lg bg-blue-100  sm:px-6 lg:px-8">
            <div className="lg:text-center">
              
                <h2 className="font-heading mb-4 bg-orange-100 text-orange-900 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-3xl font-semibold tracking-widest text-black uppercase title-font">
                  ABOUT US
                </h2>
                <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                  Network. Innovate. Succeed.
                </p>
                <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                  At CORPORATE HUB, our mission is to empower businesses to achieve their fullest potential by fostering a dynamic ecosystem of innovation and collaboration
                </p>
            </div>
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative shadow p-4 m-3">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src={mission} />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Our Mission
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Empowering businesses by providing an innovative ecosystem that fosters collaboration, growth, and success.
                  </dd>
                </div>
                <div className="relative shadow p-4 m-3 ">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src={comm} />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Our Community
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    Our community is built on collaboration, innovation, and mutual support.
                  </dd>
                </div>
                <div className="relative shadow p-4 m-3">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src={pop} />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Our Value Proposition
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    We offer unparalleled networking opportunities, cutting-edge resources, and a vibrant community dedicated to driving business excellence. Our corporate hub is designed to help businesses at all stages scale, innovate, and thrive in a competitive market.
                  </dd>
                </div>
                <div className="relative  shadow p-4 m-3">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src={vision} />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Our Vision
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    Our vision is to become the leading global corporate hub, continuously evolving to meet the dynamic needs of the business world.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>




      <>
        {/* component */}
        {/* This is an example component */}
        <link href="https://unpkg.com/pattern.css" rel="stylesheet" />
        <div>
          <section className="text-gray-200 bg-blue-950">
            <div className="max-w-6xl mx-auto px-5 py-24 ">
              <div className="text-center mb-20">
                <h1 className=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
                  Features
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                  Empower your business with our innovative features: state-of-the-art coworking spaces, expert mentorship, tailored workshops, and a global network designed to foster growth, collaboration, and success. Elevate your enterprise with us.
                </p>
                <div className="flex mt-6 justify-center">
                  <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex " />
                </div>
              </div>
              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
                <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                  <div className="pattern-dots-md gray-light">
                    <div className="rounded bg-gray-100 p-4 transform translate-x-6 -translate-y-6  ">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        </svg>{" "}
                      </div>
                      <div className="flex-grow ">
                        <h2 className=" text-xl title-font font-medium mb-3 text-black">
                          Community and Networking Events
                        </h2>
                        <p className="leading-relaxed text-sm text-justify text-black">
                          Regularly scheduled events to foster a sense of community and facilitate valuable business connections.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                  <div className="pattern-dots-md gray-light">
                    <div className="rounded bg-gray-100 p-4 transform translate-x-6 -translate-y-6 ">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h2 className=" text-xl title-font font-medium mb-3 text-black">
                          Innovative Collaboration Tools
                        </h2>
                        <p className="leading-relaxed text-sm text-justify text-black">
                          Advanced technology and resources to facilitate seamless collaboration and productivity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                  <div className="pattern-dots-md gray-light">
                    <div className="rounded bg-gray-100 p-4 transform translate-x-6 -translate-y-6 ">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                          />
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h2 className=" text-xl title-font font-medium mb-3 text-black">
                          Global Networking Opportunities
                        </h2>
                        <p className="leading-relaxed text-sm text-justify text-black">
                          Connect with a diverse network of professionals and businesses from around the world.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>

      <div className='md:py-[100px] px-3'>
        <h1 className=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl text-center">Some Fields Are</h1>
        <div className='max-w-[1050px] mx-auto md:grid grid-cols-3 gap-6'>
          <div className='shadow-xl bg-blue-100 h-[400px] hover:scale-105 duration-500 my-4 rounded-xl text-center p-3'>
            <img src={"heartrate.png"} alt='' className='h-[80px] mx-auto my-2' />
            <h1 className='font-bold text-2xl text-blue-900  my-2 '>Digital Marketing</h1>
<p>Digital marketing refers to the use of digital channels, platforms, and technologies to promote products, services, or brands to consumers. It encompasses a wide range of online marketing activities that leverage the internet and digital devices.</p>
          </div>
          <div className='shadow-xl bg-blue-100 h-[400px] hover:scale-105 duration-500 my-4  rounded-xl text-center p-3'>
            <img src={"kcal.png"} alt='' className='h-[100px] mx-auto my-2' />
            <h1 className='font-bold text-2xl my-2 text-blue-900'>Information Technology(IT)</h1>
           <p>Information technology (IT) refers to the use, development, and maintenance of computer systems, software, and networks for the processing and distribution of data.  </p>
          </div>
          <div className='shadow-xl bg-blue-100 h-[400px] hover:scale-105 duration-500 my-4 rounded-xl text-center p-3'>
            <img src={"walking.png"} alt='' className='h-[100px] mx-auto my-2' />
            <h1 className='font-bold text-2xl text-blue-900 my-2'>Social Media</h1>
            <p>Social media refers to online platforms and applications that enable users to create, share, and interact with content, as well as to connect and communicate with others. It has become a powerful tool for personal interaction, business marketing, and information dissemination.</p>

          </div>
        </div>
      </div>
      <div className="py-4 bg-white">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Frequently Asked <span className="text-indigo-600">Questions</span>
            </h3>
          </div>
          <div className="mt-20">
            <ul className="">
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg
                      width="30px"
                      fill="white"
                      height="30px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g data-name="Layer 2">
                        <g data-name="menu-arrow">
                          <rect
                            width={24}
                            height={24}
                            transform="rotate(180 12 12)"
                            opacity={0}
                          />
                          <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                          <circle cx={12} cy={19} r={1} />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      What could possibly be your first question?
                    </h4>
                  </div>
                </div>
                <div className="flex flex-row items-start">
                  <div className="bg-indigo-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg
                      height="25px"
                      fill="white"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 295.238 295.238"
                      style={{ enableBackground: "new 0 0 295.238 295.238" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <g>
                            <path
                              d="M277.462,0.09l-27.681,20.72l-27.838,64.905h-22.386l-8.79-19.048h5.743c10.505,0,19.048-8.452,19.048-18.957V28.571
				h9.524V0H196.51v28.571h9.524V47.71c0,5.248-4.271,9.433-9.524,9.433h-10.138L174.2,30.81l14.581-7.267L141.038,3.095
				l-11.224,39.281c-0.305-23.371-19.386-42.29-42.829-42.29c-23.633,0-42.857,19.224-42.857,42.857
				c0,14.281,7.233,27.676,19.048,35.595v7.176H51.643L50.9,89.619c-2.314,12.005-2.529,24.343-0.638,36.648l-32.486,57.905
				l35.876,8.195v60.014h47.619v42.857h114.286v-66.357c33.333-23.581,52.371-61.495,52.343-101.943l0.01-17.371
				c0-6.548-0.605-13.276-1.824-19.905l-0.705-3.948h-9.348l21.429-51.338V0.09z M206.033,19.138V9.614h9.524v9.524H206.033z
				 M189.067,85.714h-18.062l-8.657-19.048h17.929L189.067,85.714z M147.219,16.119l18.929,8.11l-4.467,2.19l14.2,30.724h-17.862
				l-11.605-25.471l-4.262,2.152L147.219,16.119z M160.543,85.715h-21.176v-9.433c0-5.252,4.271-9.614,9.524-9.614h2.995v-0.001
				L160.543,85.715z M141.843,44.652l5.776,12.71c-9.905,0.667-17.776,8.848-17.776,18.919v9.433h-19.048v-7.176
				c9.529-6.386,15.995-16.352,18.176-27.452L141.843,44.652z M53.653,42.948c0-18.376,14.957-33.333,33.333-33.333
				c18.376,0,33.333,14.957,33.333,33.333c0,11.829-6.39,22.881-16.671,28.838l-2.376,1.371v12.557h-9.524V56.352
				c5.529-1.971,9.524-7.21,9.524-13.41c0-7.876-6.41-14.286-14.286-14.286c-7.876,0-14.286,6.411-14.286,14.287
				c0,6.2,3.995,11.438,9.524,13.41v29.362H72.7V73.157l-2.376-1.376C60.043,65.824,53.653,54.776,53.653,42.948z M86.986,47.71
				c-2.629,0-4.762-2.139-4.762-4.762c0-2.629,2.133-4.762,4.762-4.762c2.629,0,4.762,2.133,4.762,4.762S89.615,47.71,86.986,47.71z
				 M257.366,95.239c0.691,4.761,1.039,9.59,1.039,14.285l0.01,17.405c0.029,38.148-18.795,73.871-50.286,95.552l-2.095,1.429
				v61.805h-95.238v-42.857h-47.62v-58.086l-30.862-7.043l27.876-49.7l-0.271-1.7c-1.771-10.419-1.871-21.567-0.333-31.09h3.59
				h47.619H257.366z M245.714,85.714H232.3l23.738-55.343l10.557,5.257L245.714,85.714z M267.938,25.714l-5.267-2.633l5.267-3.943
				V25.714z"
                            />
                            <path
                              d="M96.51,123.81c-7.876,0-14.286-4.762-14.286-14.286H72.7c0,14.286,10.681,23.81,23.81,23.81
				c13.129,0,23.81-9.524,23.81-23.81h-9.524C110.795,119.048,104.386,123.81,96.51,123.81z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </li>
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg
                      width="30px"
                      fill="white"
                      height="30px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g data-name="Layer 2">
                        <g data-name="menu-arrow">
                          <rect
                            width={24}
                            height={24}
                            transform="rotate(180 12 12)"
                            opacity={0}
                          />
                          <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                          <circle cx={12} cy={19} r={1} />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      What could possibly be your first question?
                    </h4>
                  </div>
                </div>
                <div className="flex flex-row items-start">
                  <div className="bg-indigo-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg
                      height="25px"
                      fill="white"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 295.238 295.238"
                      style={{ enableBackground: "new 0 0 295.238 295.238" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <g>
                            <path
                              d="M277.462,0.09l-27.681,20.72l-27.838,64.905h-22.386l-8.79-19.048h5.743c10.505,0,19.048-8.452,19.048-18.957V28.571
				h9.524V0H196.51v28.571h9.524V47.71c0,5.248-4.271,9.433-9.524,9.433h-10.138L174.2,30.81l14.581-7.267L141.038,3.095
				l-11.224,39.281c-0.305-23.371-19.386-42.29-42.829-42.29c-23.633,0-42.857,19.224-42.857,42.857
				c0,14.281,7.233,27.676,19.048,35.595v7.176H51.643L50.9,89.619c-2.314,12.005-2.529,24.343-0.638,36.648l-32.486,57.905
				l35.876,8.195v60.014h47.619v42.857h114.286v-66.357c33.333-23.581,52.371-61.495,52.343-101.943l0.01-17.371
				c0-6.548-0.605-13.276-1.824-19.905l-0.705-3.948h-9.348l21.429-51.338V0.09z M206.033,19.138V9.614h9.524v9.524H206.033z
				 M189.067,85.714h-18.062l-8.657-19.048h17.929L189.067,85.714z M147.219,16.119l18.929,8.11l-4.467,2.19l14.2,30.724h-17.862
				l-11.605-25.471l-4.262,2.152L147.219,16.119z M160.543,85.715h-21.176v-9.433c0-5.252,4.271-9.614,9.524-9.614h2.995v-0.001
				L160.543,85.715z M141.843,44.652l5.776,12.71c-9.905,0.667-17.776,8.848-17.776,18.919v9.433h-19.048v-7.176
				c9.529-6.386,15.995-16.352,18.176-27.452L141.843,44.652z M53.653,42.948c0-18.376,14.957-33.333,33.333-33.333
				c18.376,0,33.333,14.957,33.333,33.333c0,11.829-6.39,22.881-16.671,28.838l-2.376,1.371v12.557h-9.524V56.352
				c5.529-1.971,9.524-7.21,9.524-13.41c0-7.876-6.41-14.286-14.286-14.286c-7.876,0-14.286,6.411-14.286,14.287
				c0,6.2,3.995,11.438,9.524,13.41v29.362H72.7V73.157l-2.376-1.376C60.043,65.824,53.653,54.776,53.653,42.948z M86.986,47.71
				c-2.629,0-4.762-2.139-4.762-4.762c0-2.629,2.133-4.762,4.762-4.762c2.629,0,4.762,2.133,4.762,4.762S89.615,47.71,86.986,47.71z
				 M257.366,95.239c0.691,4.761,1.039,9.59,1.039,14.285l0.01,17.405c0.029,38.148-18.795,73.871-50.286,95.552l-2.095,1.429
				v61.805h-95.238v-42.857h-47.62v-58.086l-30.862-7.043l27.876-49.7l-0.271-1.7c-1.771-10.419-1.871-21.567-0.333-31.09h3.59
				h47.619H257.366z M245.714,85.714H232.3l23.738-55.343l10.557,5.257L245.714,85.714z M267.938,25.714l-5.267-2.633l5.267-3.943
				V25.714z"
                            />
                            <path
                              d="M96.51,123.81c-7.876,0-14.286-4.762-14.286-14.286H72.7c0,14.286,10.681,23.81,23.81,23.81
				c13.129,0,23.81-9.524,23.81-23.81h-9.524C110.795,119.048,104.386,123.81,96.51,123.81z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </li>
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg
                      width="30px"
                      fill="white"
                      height="30px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g data-name="Layer 2">
                        <g data-name="menu-arrow">
                          <rect
                            width={24}
                            height={24}
                            transform="rotate(180 12 12)"
                            opacity={0}
                          />
                          <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                          <circle cx={12} cy={19} r={1} />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      What could possibly be your first question?
                    </h4>
                  </div>
                </div>
                <div className="flex flex-row items-start">
                  <div className="bg-indigo-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg
                      height="25px"
                      fill="white"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 295.238 295.238"
                      style={{ enableBackground: "new 0 0 295.238 295.238" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <g>
                            <path
                              d="M277.462,0.09l-27.681,20.72l-27.838,64.905h-22.386l-8.79-19.048h5.743c10.505,0,19.048-8.452,19.048-18.957V28.571
				h9.524V0H196.51v28.571h9.524V47.71c0,5.248-4.271,9.433-9.524,9.433h-10.138L174.2,30.81l14.581-7.267L141.038,3.095
				l-11.224,39.281c-0.305-23.371-19.386-42.29-42.829-42.29c-23.633,0-42.857,19.224-42.857,42.857
				c0,14.281,7.233,27.676,19.048,35.595v7.176H51.643L50.9,89.619c-2.314,12.005-2.529,24.343-0.638,36.648l-32.486,57.905
				l35.876,8.195v60.014h47.619v42.857h114.286v-66.357c33.333-23.581,52.371-61.495,52.343-101.943l0.01-17.371
				c0-6.548-0.605-13.276-1.824-19.905l-0.705-3.948h-9.348l21.429-51.338V0.09z M206.033,19.138V9.614h9.524v9.524H206.033z
				 M189.067,85.714h-18.062l-8.657-19.048h17.929L189.067,85.714z M147.219,16.119l18.929,8.11l-4.467,2.19l14.2,30.724h-17.862
				l-11.605-25.471l-4.262,2.152L147.219,16.119z M160.543,85.715h-21.176v-9.433c0-5.252,4.271-9.614,9.524-9.614h2.995v-0.001
				L160.543,85.715z M141.843,44.652l5.776,12.71c-9.905,0.667-17.776,8.848-17.776,18.919v9.433h-19.048v-7.176
				c9.529-6.386,15.995-16.352,18.176-27.452L141.843,44.652z M53.653,42.948c0-18.376,14.957-33.333,33.333-33.333
				c18.376,0,33.333,14.957,33.333,33.333c0,11.829-6.39,22.881-16.671,28.838l-2.376,1.371v12.557h-9.524V56.352
				c5.529-1.971,9.524-7.21,9.524-13.41c0-7.876-6.41-14.286-14.286-14.286c-7.876,0-14.286,6.411-14.286,14.287
				c0,6.2,3.995,11.438,9.524,13.41v29.362H72.7V73.157l-2.376-1.376C60.043,65.824,53.653,54.776,53.653,42.948z M86.986,47.71
				c-2.629,0-4.762-2.139-4.762-4.762c0-2.629,2.133-4.762,4.762-4.762c2.629,0,4.762,2.133,4.762,4.762S89.615,47.71,86.986,47.71z
				 M257.366,95.239c0.691,4.761,1.039,9.59,1.039,14.285l0.01,17.405c0.029,38.148-18.795,73.871-50.286,95.552l-2.095,1.429
				v61.805h-95.238v-42.857h-47.62v-58.086l-30.862-7.043l27.876-49.7l-0.271-1.7c-1.771-10.419-1.871-21.567-0.333-31.09h3.59
				h47.619H257.366z M245.714,85.714H232.3l23.738-55.343l10.557,5.257L245.714,85.714z M267.938,25.714l-5.267-2.633l5.267-3.943
				V25.714z"
                            />
                            <path
                              d="M96.51,123.81c-7.876,0-14.286-4.762-14.286-14.286H72.7c0,14.286,10.681,23.81,23.81,23.81
				c13.129,0,23.81-9.524,23.81-23.81h-9.524C110.795,119.048,104.386,123.81,96.51,123.81z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-blue-950  mx-auto py-16 px-[2rem] grid lg:grid-cols-3 gap-8 text-white'>
        <div className='cursor-pointer hover:'>
          <h1 className='w-full text-3xl font-bold hover:scale-105 duration-500'>Fit Fusion.</h1>
          <p className='py-4 hover:scale-105 duration-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
          <div className='flex justify-between md:w-[75%] my-6'>
            {/* <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} /> */}
          </div>
        </div>
        <div className='lg:col-span-2 md:flex justify-between mt-6'>
          <div className='cursor-pointer '>
            <h6 className='font-medium my-5 md:my-0 underline'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm hover:scale-105 duration-500'>Analytics</li>
              <li className='py-2 text-sm hover:scale-105 duration-500'>Marketing</li>
              <li className='py-2 text-sm hover:scale-105 duration-500'>Commerce</li>
              <li className='py-2 text-sm hover:scale-105 duration-500'>Insights</li>
            </ul>
          </div>
          <div className='cursor-pointer'>
            <h6 className='font-medium my-5 md:my-0 underline'>Support</h6>
            <ul>
              <li className='py-2 text-sm hover:scale-105 duration-500'>Pricing</li>
              <li className='py-2 text-sm hover:scale-105 duration-500'>Documentation</li>
              <li className='py-2 text-sm hover:scale-105 duration-500'>Guides</li>
              <li className='py-2 text-sm hover:scale-105 duration-500'>API Status</li>
            </ul>
          </div>
          <div className='cursor-pointer'>
            <h6 className='font-medium my-5 md:my-0 underline'>Company</h6>
            <ul>
              <li className='py-2 text-sm hover:scale-105 duration-500'>About</li>
              <li className='py-2 text-sm hover:scale-105 duration-500'>Blog</li>
              <li className='py-2 text-sm hover:scale-105 duration-500'>Jobs</li>
              <li className='py-2 text-sm hover:scale-105 duration-500'>Press</li>
              <li className='py-2 text-sm hover:scale-105 duration-500'>Careers</li>
            </ul>
          </div>
          <div className='cursor-pointer'>
            <h6 className='font-medium my-5 md:my-0 underline'>Legal</h6>
            <ul>
              <li className='py-2 text-sm hover:scale-105 duration-500'>Claim</li>
              <li className='py-2 text-sm hover:scale-105 duration-500'>Policy</li>
              <li className='py-2 text-sm hover:scale-105 duration-500'>Terms</li>
            </ul>
          </div>
        </div>
      </div></>
  )
}

export default Home2
