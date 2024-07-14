import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa'
const Contact = () => {
  return (
    <section className="dark:bg-slate-800" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mb-4">
                <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                    <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                        Having Some Trouble
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                        Contact us directly or you may Visit US !
                    </p>
                </div>
            </div>
            <div className="flex items-stretch justify-center">
                <div className="grid md:grid-cols-2">
                    <div className="h-full pr-6">
                        <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                        At Exam Preperations, we are committed to providing you with the best possible learning experience. Whether you have a question about our courses, need technical support, or want to share feedback, our team is here to assist you. Don't hesitate to reach out—we'd love to hear from you!                        </p>
                        <ul className="mb-6 md:mb-0">
                            <li className="flex">
                                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                    <FaMapMarkerAlt className="h-6 w-6" />
                                </div>
                                <div className="ml-4 mb-4">
                                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address</h3>
                                    <p className="text-gray-600 dark:text-slate-400">Dhapuk Fedi</p>
                                    <p className="text-gray-600 dark:text-slate-400">Bheerkot 6, Syangja</p>
                                </div>
                            </li>
                            <li className="flex">
                                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                    <FaPhoneAlt className="h-6 w-6" />
                                </div>
                                <div className="ml-4 mb-4">
                                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact</h3>
                                    <p className="text-gray-600 dark:text-slate-400">Mobile: +977 9812345678</p>
                                    <p className="text-gray-600 dark:text-slate-400">Mail: bhojthapa@gmail.com</p>
                                </div>
                            </li>
                            <li className="flex">
                                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                    <FaRegClock className="h-6 w-6" />
                                </div>
                                <div className="ml-4 mb-4">
                                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Mostly Available Hours</h3>
                                    <p className="text-gray-600 dark:text-slate-400">Sunday - Friday: 08:00 - 17:00</p>
                                    <p className="text-gray-600 dark:text-slate-400">Saturday : 08:00 - 12:00</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                        <h2 className="mb-4 text-2xl font-bold dark:text-white">You can directly send us Your Problems.</h2>
                        <form id="contactForm">
                            <div className="mb-6">
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                                        <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name" />
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                                        <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email" />
                                    </div>
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                                    <textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 transition duration-500 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Contact