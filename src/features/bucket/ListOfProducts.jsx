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
        <>
            <div className="mb-2 sm:py-2 sm:text-sm xl:py-3 md:py-2 md:text-md justify-center m-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="cart_nav">
                    <h5>Image</h5>
                    <h5>Title</h5>
                    <h5>Price</h5>
                    <h5>Quantity</h5>
                    <h5>Total Price</h5>
                    <h5>Remove</h5>
                </div>
            </div>
            {
                data && data.map((item, index) => {
                    return <ProductItem key={index} item={item} index={index} />;
                })
            }
            <div className="mb-2 sm:py-2 sm:text-sm xl:py-3 md:py-2 md:text-md justify-center m-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="cart_footer">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>
                        <h5>Total Price</h5>
                    </div>
                    <div className='m-auto'>
                        <h5>{totalPrice}</h5>
                    </div>
                    <div className='m-auto'>
                    </div>
                </div>
            </div>
        </>
    )
}
