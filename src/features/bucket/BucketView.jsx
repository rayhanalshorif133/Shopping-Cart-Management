import React from 'react'
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import ListOfProducts from './ListOfProducts';
import EmptyBucket from './_partials/EmptyBucket';

export default function BucketView() {

    const buckets = useSelector(state => state.bucket);
    const { data, isLoading, error, status } = buckets;

    console.log(data.length);

    return (
        <div className='mt-12'>
            <div className="p-4 mt-2 mb-4 text-lg text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                <strong className="font-bold">Cart</strong>
            </div>
            {
                isLoading ? <Loading /> : data.length == 0 ? <EmptyBucket /> : <ListOfProducts data={data} />
            }
        </div>
    )
}
