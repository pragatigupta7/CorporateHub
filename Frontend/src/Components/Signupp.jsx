import React from 'react'
import logo from "../assets/Logo-removebg-preview.png"
import { Link, useNavigate  } from 'react-router-dom'
import { useFormik } from 'formik'
import login from "../assets/login1.png"
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .max(15, 'Password must be at most 15 characters'),
    confirmpassword: Yup.string()
        .required('Confirm Password is required')
        .min(8, 'Password must be at least 8 characters')
        .max(15, 'Password must be at most 15 characters')
})


const Signupp = () => {
    const Navigate = useNavigate();
    const signupForm = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmpassword: ''
        },
        onSubmit: async (values, action) => {
            console.log(values);
            const res = await fetch('http://localhost:5000/user/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(res.status)
            action.resetForm()

            if (res.status === 200) {
                enqueueSnackbar('Signup successful', { variant: 'success' })
                Navigate("/Login")
            } else {
                enqueueSnackbar('Signup failed', { variant: 'error' })
            }
        },
        validationSchema: SignupSchema
    })


    return (
        <div>
            <>
                {/* component */}
                <link
                    href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
                    rel="stylesheet"
                />
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n/*remove custom style*/\n  .circles{\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n  .circles li{\n    position: absolute;\n    display: block;\n    list-style: none;\n    width: 20px;\n    height: 20px;\n    background: rgba(255, 255, 255, 0.2);\n    animation: animate 25s linear infinite;\n    bottom: -150px;  \n}\n.circles li:nth-child(1){\n    left: 25%;\n    width: 80px;\n    height: 80px;\n    animation-delay: 0s;\n}\n \n \n.circles li:nth-child(2){\n    left: 10%;\n    width: 20px;\n    height: 20px;\n    animation-delay: 2s;\n    animation-duration: 12s;\n}\n \n.circles li:nth-child(3){\n    left: 70%;\n    width: 20px;\n    height: 20px;\n    animation-delay: 4s;\n}\n \n.circles li:nth-child(4){\n    left: 40%;\n    width: 60px;\n    height: 60px;\n    animation-delay: 0s;\n    animation-duration: 18s;\n}\n \n.circles li:nth-child(5){\n    left: 65%;\n    width: 20px;\n    height: 20px;\n    animation-delay: 0s;\n}\n \n.circles li:nth-child(6){\n    left: 75%;\n    width: 110px;\n    height: 110px;\n    animation-delay: 3s;\n}\n \n.circles li:nth-child(7){\n    left: 35%;\n    width: 150px;\n    height: 150px;\n    animation-delay: 7s;\n}\n \n.circles li:nth-child(8){\n    left: 50%;\n    width: 25px;\n    height: 25px;\n    animation-delay: 15s;\n    animation-duration: 45s;\n}\n \n.circles li:nth-child(9){\n    left: 20%;\n    width: 15px;\n    height: 15px;\n    animation-delay: 2s;\n    animation-duration: 35s;\n}\n \n.circles li:nth-child(10){\n    left: 85%;\n    width: 150px;\n    height: 150px;\n    animation-delay: 0s;\n    animation-duration: 11s;\n}\n  @keyframes animate {\n \n    0%{\n        transform: translateY(0) rotate(0deg);\n        opacity: 1;\n        border-radius: 0;\n    }\n \n    100%{\n        transform: translateY(-1000px) rotate(720deg);\n        opacity: 0;\n        border-radius: 50%;\n    }\n \n}\n.triangle{\n  border-top:60rem solid #fff;\n  border-left:25rem solid transparent;\n}\n"
                    }}
                />
                <div className="relative min-h-screen flex ">
                    <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                        <div
                            className="sm:w-1/2 xl:w-2/5 h-full hidden md:flex flex-auto items-center justify-start p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
                            style={{
                                backgroundImage:
                                    "url(https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)"
                            }}
                        >
                            <div className="absolute bg-gradient-to-b from-blue-900 to-gray-900 opacity-75 inset-0 z-0" />
                            <div
                                className="absolute triangle  min-h-screen right-0 w-16"
                                style={{}}
                            />
                           {/*} <Link
                                to="https://codepen.io/uidesignhub"
                                target="_blank"
                                title="codepen aji"
                                className="flex absolute top-5 text-center text-gray-100 focus:outline-none"
                            >
                                <img
                                    src={logo}
                                    alt="aji"
                                    className="object-cover mx-auto w-8 h-8 rounded-full w-10 h-10"
                                />
                                <p className="text-xl ml-3">
                                    Corporate<strong>Hub</strong>
                                </p>{" "}
                            </Link>
                           {/*} <img
                                src={login}
                                className="h-96 absolute right-5 mr-5"
                        />*/}
                            <div className="w-full  max-w-md z-10">
                                <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
                                Innovate, Integrate, Succeed.
                                </div>
                                <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
                                    {" "}
                                    Connect with your team, access essential resources, and stay updated with the latest company news. Everything you need, all in one place.
                                </div>
                            </div>
                            {/*-remove custom style*/}
                            <ul className="circles">
                                <li />
                                <li />
                                <li />
                                <li />
                                <li />
                                <li />
                                <li />
                                <li />
                                <li />
                                <li />
                            </ul>
                        </div>
                        <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white ">
                            <div className="max-w-md w-full space-y-8">
                                <div className="text-center">
                                    <h1 className="mt-1 text-5xl font-bold text-gray-900">
                                        Sign up
                                    </h1>
                                    <h2 className="mt-6 text-3xl font-bold text-gray-900">
                                        Welcome
                                    </h2>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Please register yourself
                                    </p>
                                </div>

                                {/*} <div className="flex items-center justify-center space-x-2">
            <span className="h-px w-16 bg-gray-200" />
            <span className="text-gray-300 font-normal">or continue with</span>
            <span className="h-px w-16 bg-gray-200" />
      </div>*/}
                                <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={signupForm.handleSubmit}>
                                    <input type="hidden" name="remember" defaultValue="true" />
                                    <div className="relative">
                                        <div className="absolute right-3 mt-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 text-green-500"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                        <span style={{ color: 'red', fontSize: '10' }}>{signupForm.touched.email && signupForm.errors.email}</span>
                                        <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                            Email
                                        </label>
                                        <input
                                            className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                            type="email"
                                            placeholder="mail@gmail.com"
                                            defaultValue="mail@gmail.com" id="email" onChange={signupForm.handleChange}
                                            value={signupForm.values.email}
                                        />
                                    </div>
                                    <div className="mt-8 content-center">
                                        <span style={{ color: 'red', fontSize: '10' }}>{signupForm.touched.password && signupForm.errors.password}</span>
                                        <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                            Password
                                        </label>
                                        <input
                                            className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                                            type="password"
                                            placeholder="Enter your password"
                                            defaultValue="*****" id="password"

                                            onChange={signupForm.handleChange}
                                            value={signupForm.values.password}
                                        />
                                    </div>
                                    <div className="mt-8 content-center">
                                    <span style={{color: 'red', fontSize:'10'}}>{signupForm.touched.confirmpassword && signupForm.errors.confirmpassword}</span>
                                        <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                            Password
                                        </label>
                                        <input
                                            className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                                            type="password"
                                            placeholder="Enter your password"
                                            defaultValue="*****" id="confirmpassword"

                                            onChange={signupForm.handleChange}
                                            value = {signupForm.values.confirmpassword} 
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                id="remember_me"
                                                name="remember_me"
                                                type="checkbox"
                                                className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                                            />
                                            <label
                                                htmlFor="remember_me"
                                                className="ml-2 block text-sm text-gray-900"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                        
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                                        >
                                            Sign up
                                        </button>
                                    </div>
                                    <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                                        <span>if you have already register </span>
                                        <Link
                                            to="/Login"
                                            className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                                        >
                                            Sign in
                                        </Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Signupp
