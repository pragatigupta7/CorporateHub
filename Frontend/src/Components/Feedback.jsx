'use client';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import StarRatings from 'react-star-ratings';

const Feedback = () => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const [rating, setRating] = useState(4)

    const feedbackForm = useFormik({
        initialValues: {
            user: currentUser._id,
            name: currentUser.name,
            rating: 4,
            feedback: ''
        },
        onSubmit: (values) => {
            values.rating = rating;
            console.log(values);
            fetch('http://localhost:5000/feedback/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    console.log(response.status);
                    if (response.status === 200) {
                        toast.success('Feedback Submitted');
                        response.json()
                            .then((data) => {
                                console.log(data);

                            })
                    } else {
                        console.log('Failed');
                    }
                }).catch((err) => {
                    console.log(err);
                })
        }
    })

    return (
        <div><>
            {/* Contact */}
            <div className="bg-neutral-900">
                <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
                    {/* Title */}
                    <div className="max-w-3xl mb-10 lg:mb-14">
                        <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                            Feedback
                        </h2>

                    </div>
                    {/* End Title */}
                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">

                        <form onSubmit={feedbackForm.handleSubmit}>
                            <div className="space-y-4">

                                <StarRatings
                                    rating={rating}
                                    starRatedColor="yellow"
                                    changeRating={setRating}
                                    numberOfStars={5}
                                    name='rating'
                                />
                                {/* Input */}
                                <div className="relative">
                                    <textarea
                                        type="text"
                                        id="feedback"
                                        onChange={feedbackForm.handleChange}
                                        value={feedbackForm.values.feedback}
                                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
          focus:pt-6
          focus:pb-2
          [&:not(:placeholder-shown)]:pt-6
          [&:not(:placeholder-shown)]:pb-2
          autofill:pt-6
          autofill:pb-2"
                                        placeholder="Name"
                                    ></textarea>
                                    <label
                                        htmlFor="hs-tac-input-name"
                                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
            peer-focus:text-xs
            peer-focus:-translate-y-1.5
            peer-focus:text-neutral-400
            peer-[:not(:placeholder-shown)]:text-xs
            peer-[:not(:placeholder-shown)]:-translate-y-1.5
            peer-[:not(:placeholder-shown)]:text-neutral-400"
                                    >
                                        Review
                                    </label>
                                </div>
                                <div>
                                    <label className='text-white'>
                                        User Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        onChange={feedbackForm.handleChange}
                                        value={feedbackForm.values.name}
                                        placeholder="Name"
                                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none" />
                                </div>
                            </div>
                            <div className="mt-2">
                                <p className="text-xs text-neutral-500">
                                    All fields are required
                                </p>
                                <p className="mt-5">
                                    <button
                                        className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                                        type='submit'
                                    >
                                        Submit
                                        <svg
                                            className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
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
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </button>
                                </p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
        </div>
    )
}

export default Feedback