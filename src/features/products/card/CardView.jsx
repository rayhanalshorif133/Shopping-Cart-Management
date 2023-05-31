import React, { useEffect } from 'react'

import './CardView.css'
import { FaPlusSquare } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addBucket } from '../../bucket/bucketSlice';

export default function CardView(props) {

    const { product } = props;

    const disPatch = useDispatch();


    const handleAddToCart = () => {
        const item = {
            id: product.id,
            title: product.title,
            price: product.price,
            totalPrice: product.price,
            img: product.image,
            quantity: 1
        }
        disPatch(addBucket(item));
    }


    return (
        <div key={product.id}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg product__image text-center justify-center mx-auto mt-2" src={product.image} alt="" height="100px" width={400} />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                            {product.title}
                        </h5>
                    </a>
                    <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                        {product.category}
                    </p>
                    <div className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center
                     text-white bg-blue-700 rounded-lg hover:bg-blue-800 
                     focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleAddToCart}>
                        <FaPlusSquare className='mr-2' /> Add to cart
                    </div>
                </div>
            </div>
        </div>
    )
}
