import React from 'react';
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addBucket, bucketTotalPrice, removeBucket, removeItemBucket } from '../bucketSlice';
import QuantityHandler from './QuantityHandler';


export default function ProductItem({ item, index }) {

    const disPatch = useDispatch();

    const data = useSelector((state) => state.bucket.data);

    const handlePlusBtn = (id) => {
        const findItem = data.find((item) => item.id === id);
        const item = {
            id: id,
            title: findItem.title,
            price: findItem.price,
            totalPrice: findItem.totalPrice + findItem.price,
            img: findItem.image,
            quantity: 1
        }
        disPatch(addBucket(item));
        disPatch(bucketTotalPrice());
    }

    const handleMinusBtn = (id) => {
        disPatch(removeItemBucket(id));
        disPatch(bucketTotalPrice());
    }

    const handleDeleteBtn = (id) => {
        disPatch(removeBucket(id));
        disPatch(bucketTotalPrice());
    }
    return (
        <>
            <div key={index} className="cart_product mb-5 justify-center m-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className='cart_product_item'>
                    <div className='m-auto'>
                        <img src={item.img} alt="" />
                    </div>
                    <div className='m-auto'>
                        <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                            {item.title}
                        </h5>
                    </div>
                    <div className='m-auto'>
                        <p className="font-normal text-gray-700 dark:text-gray-400 sm:mt-3 md:mt-3">
                            <span className='xxl:hidden xl:hidden lg:hidden font-bold mr-3'>Price:</span>{item.price}
                        </p>
                    </div>
                    <div className='m-auto'>
                        <div className='quantity__container'>
                        <span className='xxl:hidden xl:hidden lg:hidden font-bold mr-3'>Quantity:</span>
                        <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center mr-2 mb-2" onClick={() => handlePlusBtn(item.id)}>
                            <FaPlus />
                        </button>
                        <QuantityHandler id={item.id} />
                        <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center mr-2 mb-2"
                            onClick={() => handleMinusBtn(item.id)}>
                            <FaMinus />
                        </button>
                        </div>
                    </div>

                    <div className='m-auto'>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <span className='xxl:hidden xl:hidden lg:hidden font-bold sm:mr-3'>Total Price:</span>
                            {parseFloat(item.totalPrice).toFixed(2)}
                        </p>
                    </div>
                    <div className='m-auto'>
                        <div className='sm:my-4'>
                             <button type="button" className="delete_item_btn"
                                 onClick={() => handleDeleteBtn(item.id)}>
                                 <FaTrash />
                             </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
