import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {


    const bucketLength = useSelector((state) => state.bucket.data && state.bucket.data.length);

    const location = useLocation();
    var isFixed = 'relative';

    if (location.pathname === '/') {
        isFixed = 'relative';
    } else if (location.pathname === '/cart') {
        isFixed = bucketLength < 3 ? 'fixed' : 'relative';
    }
    else {
        isFixed = 'fixed';
    }


    const footerFixed = {
        position: isFixed,
        bottom: '0',
        width: '100%',
        left: '0',
    }

    return (
        <>
            <footer className="bg-white rounded-lg shadow dark:bg-gray-900" style={footerFixed}>
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                            <span className="self-center font-semibold whitespace-nowrap dark:text-white">
                                Cart App
                            </span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link to="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </>
    )
}
