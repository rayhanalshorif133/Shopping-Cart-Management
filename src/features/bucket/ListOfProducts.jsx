import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBucket, bucketTotalPrice, removeBucket, removeItemBucket } from './bucketSlice';
import ProductItem from './_partials/ProductItem';


export default function ListOfProducts({ data }) {



    const disPatch = useDispatch();

    const msg = useSelector((state) => state.bucket.msg);
    const totalPrice = useSelector((state) => parseFloat(state.bucket.totalPrice).toFixed(2));



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
                    return <ProductItem key={index} item={item} index={index} />;
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
