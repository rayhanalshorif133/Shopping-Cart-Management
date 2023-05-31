import React from 'react'
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import ListOfProducts from './ListOfProducts';

export default function BucketView() {

    const buckets = useSelector(state => state.bucket);
    const { data, isLoading, error, status } = buckets;
    return (
        <div className='mt-12'>
            <div className="p-4 mt-2 mb-4 text-lg text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                <strong className="font-bold">Cart</strong>
            </div>
            {
                isLoading ? <Loading /> : <ListOfProducts data={data} />
            }
        </div>
    )
}
