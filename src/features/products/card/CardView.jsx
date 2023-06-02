import React from 'react';

import { FaPlusSquare } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addBucket } from '../../bucket/bucketSlice';
import './CardView.css';

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
                    <img className="product_image rounded-t-lg product__image text-center justify-center mx-auto mt-2" src={product.image} alt="" height="100px" width={400} />
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
                    <div className="add_to_cart_btn" onClick={handleAddToCart}>
                        <FaPlusSquare className='mr-2' /> Add to cart
                    </div>
                </div>
            </div>
        </div>
    )
}
