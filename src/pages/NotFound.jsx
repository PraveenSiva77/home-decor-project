import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

function NotFound() {
  return (
    // 404 not found page
    <section className="flex items-center h-dvh p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
                <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                    <span className="sr-only">Error</span>404
                </h2>
                <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>

                <a 
                  rel="noopener noreferrer" 
                  href="/" 
                  className="flex items-center justify-center gap-2 px-8 py-3 font-semibold rounded hover:text-blue-500 underline dark:bg-violet-400 dark:text-gray-900"
                >
                  <IoIosArrowBack/> Back to homepage
                </a>
            </div>
        </div>
    </section>
  )
}

export default NotFound