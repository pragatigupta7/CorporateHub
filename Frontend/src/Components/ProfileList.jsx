import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ProfileList = () => {

    const [profiles, setProfile] = useState([])
    const [masterList, setMasterList] = useState([]);

    const fetchaddprofile = async () => {
        const res = await fetch('http://localhost:5000/profile/getall')
        console.log(res.status)
        if (res.status === 200) {
            const data = await res.json();
            console.log(data)
            setProfile(data)
            setMasterList(data)
        }
    }
    useEffect(() => {
        fetchaddprofile()
    }, []);
    const displayProfile = () => {
        return profiles.map((item) => (

            <div className=" relative flex-col justify-center overflow-hidden  py-6 sm:py-12 grid grid-cols-4">
                <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                    <span className="absolute  top-10 z-0 h-20 w-20 rounded-full bg-blue-950 transition-all duration-300 group-hover:scale-[10]" />
                    <div className="relative z-10 mx-auto max-w-md">
                        <span className="grid  h-20 w-40 place-items-center rounded-full bg-blue-950 transition-all duration-300 group-hover:bg-blue-800">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"   
                                stroke="currentColor"
                                className="h-10 w-10 text-white transition-all"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                />
                            </svg>
                        </span>
                        <h4 className="text-2xl font-bold dark:text-black group-hover:text-white mt-3">    {item.name}</h4>
                        <div className="space-y-6  text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                            <p className="dark:text-black group-hover:text-white">
                                {item.category}
                            </p>
                        </div>
                        <div className="pt-5 text-base font-semibold leading-7">
                            <p className="dark:text-black group-hover:text-white">{item.email}</p>
                            <p className="dark:text-black group-hover:text-white">{item.contact}</p>
                        </div>
                        <div className="pt-5 text-base font-semibold leading-7">
                            <p>
                                <Link
                                    to={"/Viewpage/" + item._id}
                                    className="text-sky-500 transition-all duration-300 group-hover:text-white"
                                >
                                    Learn more
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ))
    }
    const applysearch = (e) => {
        const value = e.target.value;
        setProfile(masterList.filter((profiles) => {
            return (profiles.name.toLowerCase().includes(value.toLowerCase()));
        }));
    }
    const filterbyCategory = (category) => {
        console.log(category)
        const filtercategory = masterList.filter(cat => cat.category.toLowerCase().includes(category.toLowerCase()));
        setProducts(filtercategory)
    }


    return (
        <div>


            {/* <div>
                
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);"
                    }}
                />
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n    .min-w-80 {\n        min-width: 20rem;\n    }\n    .resize::-webkit-resizer,\n    .resize-x::-webkit-resizer,\n    .resize-y::-webkit-resizer {\n        background-color: transparent;\n    }\n    .resize:after,\n    .resize-x:after,\n    .resize-y:after {\n        display: block;\n        position: absolute;\n        bottom: 5px;\n        right: 5px;\n        width: 24px;\n        height: 24px;\n        content: '\\F045D';\n        font: normal normal normal 24px/1 \"Material Design Icons\";\n        font-size: 24px;\n        text-rendering: auto;\n        line-height: 24px;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        color: rgba(0,0,0,0.3);\n    }\n"
                    }}
                />
                <div className="min-w-screen  flex items-center justify-center px-5 py-5">
                    <div
                        className="w-full mx-auto rounded-xl bg-gray-100 shadow-lg p-10 text-gray-800 relative overflow-hidden resize-x min-w-80 max-w-3xl"
                        x-data="app()"
                        x-init="generatePassword()"
                    >
                        <div className="relative mt-1">
                            <input
                                type="search"
                                id="default-search"
                                className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="Search..." onChange={applysearch}

                            />
                            <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors">
                                <i className="mdi mdi-magnify" />
                            </button>

                            <div className='flex justify-evenly mt-5'>
                                <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold hover:text-white py-2 px-4 border border-black-500 hover:border-black rounded"
                                    id="DigitalMarketing" onClick={(e) => filterbyCategory("DigitalMarketing")}>
                                    Digital Marketing
                                </button>
                                <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold hover:text-white py-2 px-4 border border-black-500 hover:border-black rounded"
                                    id="IT" onClick={(e) => filterbyCategory("IT")}>IT</button>
                                <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold hover:text-white py-2 px-4 border border-black-500 hover:border-black rounded"
                                    id="Management" onClick={(e) => filterbyCategory("Management")}>Management</button>
                            </div>

                        </div>
                        <div className="absolute top-0 left-0 w-full h-2 flex">
                            <div className="h-2 bg-blue-500 flex-1" />
                            <div className="h-2 bg-red-500 flex-1" />
                            <div className="h-2 bg-yellow-500 flex-1" />
                            <div className="h-2 bg-blue-500 flex-1" />
                            <div className="h-2 bg-green-500 flex-1" />
                            <div className="h-2 bg-red-500 flex-1" />
                        </div>
                    </div>
                </div>
              
                <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                    <div>
                        <a
                            title="Buy me a beer"
                            href="https://www.buymeacoffee.com/scottwindon"
                            target="_blank"
                            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
                        >
                            <img
                                className="object-cover object-center w-full h-full rounded-full"
                                src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
                            />
                        </a>
                    </div>
                </div>





            </div> */}

            <div className="relative overflow-hidden bg-gray-100 ">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-20">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-6xl font-bold ">
                            Search
                        </h1>
                        <p className="mt-3 text-gray-600 dark:text-neutral-400">
                            Stay in the know with insights from industry experts.
                        </p>
                        <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
                            {/* Form */}
                            <form>
                                <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
                                    <div className="flex-[1_0_0%] ">
                                        <label
                                            htmlFor="hs-search-article-1"
                                            className="block text-sm text-gray-700 font-medium dark:text-white"
                                        >
                                            {/* <span className="sr-only">Search article</span> */}
                                        </label>
                                        <input
                                            type="email"
                                            onChange={applysearch}
                                            className="py-2.5 px-4 block w-full border-transparent rounded-lg  dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            placeholder="Search Company Profiles"
                                        />
                                    </div>
                                    <div className="flex-[0_0_auto] ">
                                        <a
                                            className="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                            href="#"
                                        >
                                            <svg
                                                className="flex-shrink-0 size-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle cx={11} cy={11} r={8} />
                                                <path d="m21 21-4.3-4.3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </form>
                            {/* End Form */}
                            {/* SVG Element */}
                            <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                                <svg
                                    className="w-16 h-auto text-orange-500"
                                    width={121}
                                    height={135}
                                    viewBox="0 0 121 135"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                                        stroke="currentColor"
                                        strokeWidth={10}
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                                        stroke="currentColor"
                                        strokeWidth={10}
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                                        stroke="currentColor"
                                        strokeWidth={10}
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            {/* End SVG Element */}
                            {/* SVG Element */}
                            <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                                <svg
                                    className="w-40 h-auto text-cyan-500"
                                    width={347}
                                    height={188}
                                    viewBox="0 0 347 188"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                                        stroke="currentColor"
                                        strokeWidth={7}
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            {/* End SVG Element */}
                        </div>
                        <div className="mt-10 sm:mt-20">
                            <Link onClick={(e) => filterbyCategory("Hospital")}
                                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                href="#"
                            >
                                <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect width={20} height={14} x={2} y={7} rx={2} ry={2} />
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                                Hospitals
                            </Link>
                            <Link onClick={(e) => filterbyCategory("Cafe")}
                                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                href="#"
                            >
                                <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                                    <circle cx={12} cy={12} r={3} />
                                </svg>
                                Cafe's
                            </Link>
                            <Link onClick={(e) => filterbyCategory("IT")}
                                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                href="#"
                            >
                                <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                </svg>
                                IT
                            </Link>
                            <Link onClick={(e) => filterbyCategory("Management")}
                                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                href="#"
                            >
                                <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                                    <path d="M9 18h6" />
                                    <path d="M10 22h4" />
                                </svg>
                                Digital Marketing
                            </Link>
                            <Link onClick={(e) => filterbyCategory("IT")}
                                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                href="#"
                            >
                                <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                                    <path d="M10 6h4" />
                                    <path d="M10 10h4" />
                                    <path d="M10 14h4" />
                                    <path d="M10 18h4" />
                                </svg>
                                IT/DM
                            </Link>
                            <Link onClick={(e) => filterbyCategory("Hotel")}
                                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                href="#"
                            >
                                <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                                </svg>
                                Hotel
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto ">
                <div className="grid grid-cols-4 ">
                    {displayProfile()}
                </div>
            </div>
        </div>


    )
}

export default ProfileList
