import React, { useEffect } from 'react';
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addBucket, bucketTotalPrice, removeBucket, removeItemBucket } from './bucketSlice';


export default function ListOfProducts({ data }) {



    const disPatch = useDispatch();

    const msg = useSelector((state) => state.bucket.msg);
    const totalPrice = useSelector((state) => parseFloat(state.bucket.totalPrice).toFixed(2));

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

    useEffect(() => {
        disPatch(bucketTotalPrice());
    }, [disPatch]);




    return (
        <div className=''>
            <div className="mb-2 sm:py-2 sm:text-sm xl:py-3 md:py-2 md:text-md justify-center m-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="grid grid-cols-6 xl:gap-28 md:gap-65">
                    <div className='m-auto'>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Image
                        </h5>
                    </div>
                    <div className='m-auto'>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Title
                        </h5>
                    </div>
                    <div className='m-auto'>
                        <p className="text-xl font-bold text-gray-700 dark:text-gray-400">
                            Price
                        </p>
                    </div>
                    <div className='m-auto'>
                        <p className="text-xl font-bold text-gray-700 dark:text-gray-400">
                            Quantity
                        </p>
                    </div>
                    <div className='m-auto'>
                        <p className="text-xl font-bold text-gray-700 dark:text-gray-400">
                            Total Price
                        </p>
                    </div>
                    <div className='m-auto'>
                        <p className="text-xl font-bold text-gray-700 dark:text-gray-400">
                            Remove
                        </p>
                    </div>
                </div>
            </div>
            {
                data && data.map((item, index) => {
                    return (
                        <div key={index} className="mb-5 justify-center m-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                            <div className="grid grid-cols-6 gap-2">
                                <div className='m-auto'>
                                    <img className="py-3 px-5 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                        src={item.img} alt="" />
                                </div>
                                <div className='m-auto'>
                                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {item.title}
                                    </h5>
                                </div>
                                <div className='m-auto'>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        {item.price}
                                    </p>
                                </div>
                                <div className='m-auto'>
                                    <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center mr-2 mb-2" onClick={() => handlePlusBtn(item.id)}>
                                        <FaPlus />
                                    </button>
                                    <span className="bg-purple-100 text-purple-800 text-xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">
                                        {item.quantity}
                                    </span>
                                    <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center mr-2 mb-2"
                                        onClick={() => handleMinusBtn(item.id)}>
                                        <FaMinus />
                                    </button>
                                </div>
                                <div className='m-auto'>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        {parseFloat(item.totalPrice).toFixed(2)}
                                    </p>
                                </div>
                                <div className='m-auto'>
                                    <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center mr-2 mb-2"
                                        onClick={() => handleDeleteBtn(item.id)}>
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        </div>);
                })
            }
            <div className="mb-2 sm:py-2 sm:text-sm xl:py-3 md:py-2 md:text-md justify-center m-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="grid grid-cols-6 xl:gap-28 md:gap-65">
                    <div className='m-auto'>
                    </div>
                    <div className='m-auto'>
                    </div>
                    <div className='m-auto'>
                    </div>
                    <div className='m-auto'>
                        <p className="text-xl font-bold text-gray-700 dark:text-gray-400">
                            Total Price
                        </p>
                    </div>
                    <div className='m-auto'>
                        <p className="text-xl font-bold text-gray-700 dark:text-gray-400">
                            {totalPrice}
                        </p>
                    </div>
                    <div className='m-auto'>
                    </div>
                </div>
            </div>
        </div>
    )
}
