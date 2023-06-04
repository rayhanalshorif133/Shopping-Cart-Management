import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../features/products/productsSlice';

export default function About() {


    const [flag, setFlag] = useState(true);
    const [source, setSource] = useState('images/about/redux.png');

    const images = [
        'images/about/flowbite.jpg',
        'images/about/React-icon.png',
        'images/about/Redux-toolkit-icon.png',
        'images/about/redux.png',
        'images/about/TailwindCSS-icon.png',
    ]


    useEffect(() => {

        setTimeout(() => {
            // random image
            var randomImage = Math.floor(Math.random() * images.length);
            setFlag(!flag);
            setSource(images[randomImage]);
        }, 3000);
    }, [flag]);


    return (
        <div className='mt-20'>
            <a href="#" className="justify-center mx-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="sm:w-1/3 sm:h-1/3 sm:m-5 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={source} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 sm:text-[20px] md:text-[25px] lg:text-[30px] font-bold tracking-tight text-gray-900 dark:text-white">
                        This is a Shopping Cart Application
                    </h5>
                    <p className="mb-3 sm:text-[14px] md:text-[16px] lg:text-[18px] font-normal text-gray-700 dark:text-gray-400">
                        This is a shopping cart application built with ReactJS, Redux, Redux Toolkit, TailwindCSS, Dummy Product Api.
                    </p>
                </div>
            </a>
        </div>
    )
}
