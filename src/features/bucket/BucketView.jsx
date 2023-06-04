import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import ListOfProducts from './ListOfProducts';
import EmptyBucket from './_partials/EmptyBucket';

export default function BucketView() {

    const buckets = useSelector(state => state.bucket);
    const { data, isLoading} = buckets;


    return (
        <div className='mt-12'>
            <div className="alert" role="alert">
                <strong className="font-bold">Cart</strong>
            </div>
            {
                isLoading ? <Loading /> : data.length == 0 ? <EmptyBucket /> : <ListOfProducts data={data} />
            }
        </div>
    )
}
