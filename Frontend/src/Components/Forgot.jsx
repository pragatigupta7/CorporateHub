import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import forget from "../assets/forget.png"

const Forgot = () => {

    const emailRef = useRef(null);
    const otpRef = useRef(null);
    const [verifiedUser, setVerifiedUser] = useState(null);

    const [showForm, setShowForm] = useState(false);

    const navigate = useNavigate();

    const checkMailExists = async () => {
        const res = await fetch(`http://localhost:5000/user/getbyemail/${emailRef.current.value}`);
        // console.log(res.status);
        const data = await res.json();
        // console.log(data);
        setVerifiedUser(data);
        return res.status === 200;
    }

    const sendOTP = async () => {
        if (!await checkMailExists()) {
            enqueueSnackbar('Email not registered', { variant: 'error' });
            return;
        }
        const res = await fetch(`http://localhost:5000/util/sendotp`, {
            method: 'POST',
            body: JSON.stringify({ email: emailRef.current.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(res.status);
        if (res.status === 201) {
            enqueueSnackbar('OTP sent successfully', { variant: 'success' });
        } else {
            enqueueSnackbar('Something went wrong', { variant: 'error' });
        }
    }

    const verifyOTP = async () => {
        const res = await fetch(`http://localhost:5000/util/verifyotp/${emailRef.current.value}/${otpRef.current.value}`);
        // console.log(res.status);
        if (res.status === 200) {
            setShowForm(true);
        } else {
            enqueueSnackbar('Invalid OTP', { variant: 'error' });
        }
    }

    const updatePassword = async (values) => {
        const res = await fetch(`http://localhost:5000/user/update/${verifiedUser._id}`, {
            method: 'PUT',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // console.log(res.status);
        if (res.status === 200) {
            enqueueSnackbar('Password updated successfully', { variant: 'success' });
            navigate("/login")
        } else {
            enqueueSnackbar('Something went wrong', { variant: 'error' });
        }
    }

    const resetForm = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        onSubmit: updatePassword
    });
    return (
       
                

            <>
                {/* component */}
                {/* Container */}
                <div className="container mx-auto">
                    <div className="flex justify-center px-6 my-12">
                        {/* Row */}
                        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                            {/* Col */}
                            <div
                                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                                style={{
                                    backgroundImage:
                                        'url("https://tse3.mm.bing.net/th?id=OIP.kbPaQLG9ISBfNG-4IUClDwHaEo&pid=Api&P=0&h=220") '
                                }}
                            />
                            {/* Col */}
                            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                                <div className="px-8 mb-4 text-center">
                                    <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
                                    <p className="mb-4 text-sm text-gray-700">
                                        We get it, stuff happens. Just enter your email address below and
                                        we'll send you a link to reset your password!
                                    </p>
                                </div>
                                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                    <div className="mb-4">
                                        <label
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            placeholder="Enter Email Address..."ref={emailRef}
                                        />
                                    </div>
                                    <div className="mb-6 text-center">
                                        <button onClick={sendOTP}
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Send OTP
                                        </button>
                                    </div>
                                    <div className="relative">
                                        <input
                                            autoComplete="off"
                                            id="password"
                                            name="password"
                                            type="password"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="Password" ref={otpRef}
                                        />
                                        <label
                                            htmlFor="password"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Enter OTP
                                        </label>
                                    </div>
                                    <br></br>
                                    <div className="mb-6 text-center">
                                        <button onClick={ verifyOTP}
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Verify OTP
                                        </button>
                                    </div>

                                {
                                  showForm && (
                                        <form onSubmit={resetForm.handleSubmit}>
                                            <div className="relative">
                                        <input
                                            autoComplete="off"
                                            id="password"
                                            name="password"
                                            type="text"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="Password" onChange={resetForm.handleChange}value={resetForm.values.password} 
                                        />
                                        <label
                                            htmlFor="password"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Password
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            autoComplete="off"
                                            id="confirmPassword"
                                            name="password"
                                            type="text"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="Confirm Password" onChange={resetForm.handleChange}value={resetForm.values.confirmPassword} 
                                        />
                                        <label
                                            htmlFor="password"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                           Confirm Password
                                        </label>
                                    </div>
                                    <div className="mb-6 text-center">
                                        <button 
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >Submit
                                        </button>
                                    </div>

                                            </form>
                                    )
                                }
                                    <hr className="mb-6 border-t" />
                                    <div className="text-center">
                                        <Link
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                            to="/Signupp"
                                        >
                                            Create an Account!
                                        </Link>
                                    </div>
                                    <div className="text-center">
                                        <Link
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                            to="/Login"
                                        >
                                            Already have an account? Login!
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        
    )
}

export default Forgot
