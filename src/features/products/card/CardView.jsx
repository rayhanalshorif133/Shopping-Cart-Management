import React from 'react';
import { FaPlusSquare } from "react-icons/fa";
import { useDispatch } from "react-redux";
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
        <div key={product.id} className="product_card">
            <a href="#">
                <img src={product.image} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5>{product.title}</h5>
                </a>
                <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                    {product.category}
                </p>
                <div className="add_to_cart_btn" onClick={handleAddToCart}>
                    <FaPlusSquare className='mr-2' /> Add to cart
                </div>
            </div>
        </div>
    )
}
