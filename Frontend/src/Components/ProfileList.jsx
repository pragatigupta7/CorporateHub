import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'

const ProfileList = () => {

    const [profiles, setProfile] = useState([])

    const fetchaddprofile = async () => {
        const res = await fetch('http://localhost:5000/addprofile/getall')
        console.log(res.status)
        if (res.status === 200) {
            const data = await res.json();
            console.log(data)
            setProfile(data)
        }
    }
    useEffect(() => {
        fetchaddprofile()
    }, []);
    const displayProfile = () => {
        return profiles.map((item) => (

            <div className="relative  flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 grid grid-cols-4">
                <div className="group relative  cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
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
                        <h4 className="text-2xl font-bold dark:text-black group-hover:text-white">    {item.companyname}</h4>
                        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                            <p className="dark:text-black group-hover:text-white">
                                {item.description}
                            </p>
                        </div>
                        <div className="pt-5 text-base font-semibold leading-7">
                            <p className="dark:text-black group-hover:text-white">{item.email}</p>
                            <p className="dark:text-black group-hover:text-white">{item.contact}</p>
                        </div>
                        <div className="pt-5 text-base font-semibold leading-7">
                            <p>
                                <Link
                                   to={"/view/" + item._id}
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
    return (
        <div>


            <div>
                {/* component */}
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
                                type="text"
                                id="password"
                                className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="Search..."
                            />
                            <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors">
                                <i className="mdi mdi-magnify" />
                            </button>
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
                {/* BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
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





            </div>
            <div className="container ">
                <div className="row ">
                    {displayProfile()}
                </div>
            </div>
        </div>


    )
}

export default ProfileList
