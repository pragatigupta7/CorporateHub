import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const View = () => {
    const { id } = useParams();
  const [profile, setProfile] = useState({});
  const fetchaddprofile = async () => {
    const res = await fetch("http://localhost:5000/addprofile/getbyid/" + id);
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setProfile(data);
    };
  }

  useEffect(() => {
    fetchaddprofile();
  }, [id]);

  return (
    <div>
      <main className="dark:bg-blue-950 bg-white relative overflow-hidden h-screen">
  <header className="h-24 sm:h-32 flex items-center z-30 w-full">
    <div className="container mx-auto px-6 flex items-center justify-between">
      <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
      Welcome {profile.name}
      </div>
      <div className="flex items-center">
       
        
      </div>
    </div>
  </header>
  <div className="bg-white dark:bg-blue-900 flex relative z-20 items-center overflow-hidden">
    <div className="container mx-auto px-6 flex relative py-16">
      <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
        <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
        <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
        {profile.companyname}
         
        </h1>
        <p className="text-sm sm:text-base text-gray-700 dark:text-white">
        {profile.description}
        </p>
        <div className="flex mt-8">
          <a
            href="#"
            className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
          >
            Get started
          </a>
          <a
            href="#"
            className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
          >
            Read more
          </a>
        </div>
      </div>
      <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
        <img
          src={"http://localhost:5000/" + profile.image}
          className="max-w-xs md:max-w-sm m-auto"
        />
      </div>
    </div>
  </div>
</main>

    </div>
  )
}

export default View
