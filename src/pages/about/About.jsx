import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../features/products/productsSlice';

export default function About() {


    const [flag, setFlag] = useState(true);
    const [source, setSource] = useState('/public/images/about/redux.png');

    const images = [
        '/public/images/about/flowbite.jpg',
        '/public/images/about/React-icon.png',
        '/public/images/about/Redux-toolkit-icon.png',
        '/public/images/about/redux.png',
        '/public/images/about/TailwindCSS-icon.png',
    ]


    useEffect(() => {

        setTimeout(() => {
            // random image
            var randomImage = Math.floor(Math.random() * images.length);
            setFlag(!flag);
            setSource(images[randomImage]);
        }, 5000);
    }, [flag]);


    return (
        <div className='mt-20'>
            <a href="#" className="justify-center mx-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={source} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        This is a Shopping Cart Application
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        This is a shopping cart application built with ReactJS, Redux, Redux Toolkit, TailwindCSS, Dummy Product Api.
                    </p>
                </div>
            </a>

        </div>
    )
}
