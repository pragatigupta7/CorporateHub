import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Viewpage = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState({});
    const fetchaddprofile = async () => {
      const res = await fetch("http://localhost:5000/profile/getbyid/" + id);
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
      <>
  {/* component */}
  <div className="bg-blue-600">
    <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="relative isolate overflow-hidden bg-blue-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Welcome {profile.name}
            <br />
           <h1>{profile.email}</h1> 
         
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          {profile.about}
          </p>
         
        </div>
        <div className="relative mt-16 h-80 lg:mt-8">
          <img
            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src={"http://localhost:5000/" + profile.logo}
            alt="img"
            width={1824}
            height={1080}
          />
        </div>
      </div>
    </div>
  </div>
  <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
  <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="sm:col-span-2">
      <a
        href="/"
        aria-label="Go home"
        title="Company"
        className="inline-flex items-center"
      >
        <svg
          className="w-8 text-deep-purple-accent-400"
          viewBox="0 0 24 24"
          strokeLinejoin="round"
          strokeWidth={2}
          strokeLinecap="round"
          strokeMiterlimit={10}
          stroke="currentColor"
          fill="none"
        >
          <rect x={3} y={1} width={7} height={12} />
          <rect x={3} y={17} width={7} height={6} />
          <rect x={14} y={1} width={7} height={6} />
          <rect x={14} y={11} width={7} height={12} />
        </svg>
        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
          {profile.name}
        </span>
      </a>
      <div className="mt-6 lg:max-w-sm">
        <p className="text-sm text-gray-800">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </p>
        <p className="mt-4 text-sm text-gray-800">
          Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo.
        </p>
      </div>
    </div>
    <div className="space-y-2 text-sm">
      <p className="text-base font-bold tracking-wide text-gray-900">
        Contacts
      </p>
      <div className="flex">
        <p className="mr-1 text-gray-800">Phone:</p>
        <a
          href="tel:850-123-5021"
          aria-label="Our phone"
          title="Our phone"
          className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
     {profile.contact}
        </a>
      </div>
      <div className="flex">
        <p className="mr-1 text-gray-800">Email:</p>
        <a
          href="mailto:info@lorem.mail"
          aria-label="Our email"
          title="Our email"
          className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          {profile.email}
        </a>
      </div>
      <div className="flex">
        <p className="mr-1 text-gray-800">Address:</p>
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Our address"
          title="Our address"
          className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
         {profile.address}
        </a>
      </div>
    </div>
    <div>
      <span className="text-base font-bold tracking-wide text-gray-900">
        Social
      </span>
      <div className="flex items-center mt-1 space-x-3">
        <a
          href="/"
          className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
          </svg>
        </a>
        <a
          href="/"
          className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
        >
          <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
            <circle cx={15} cy={15} r={4} />
            <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
          </svg>
        </a>
        <a
          href="/"
          className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
          </svg>
        </a>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken spare
        ribs salami.
      </p>
    </div>
  </div>
  <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
    <p className="text-sm text-gray-600">
      © Copyright  {profile.createdAt} 
    </p>
    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
      <li>
        <a
          href="/"
          className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
        >
          F.A.Q
        </a>
      </li>
      <li>
        <a
          href="/"
          className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
        >
          Privacy Policy
        </a>
      </li>
      <li>
        <a
          href="/"
          className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
        >
          Terms &amp; Conditions
        </a>
      </li>
    </ul>
  </div>
</div>

</>

    </div>
  )
}

export default Viewpage
