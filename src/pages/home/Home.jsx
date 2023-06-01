import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../features/products/productsSlice';
import Loading from '../../components/Loading';
import ProductView from '../../features/products/ProductView';

export default function Home() {

  const dispatch = useDispatch();

  const products = useSelector(state => state.product);
  const { data, isLoading, error, status } = products;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className='mt-12'>
      <div className="p-4 mt-2 mb-4 text-lg text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
        <strong className="font-bold">PRODUCTS</strong>

      </div>
      {
        isLoading ? <Loading /> : <ProductView data={data} />
      }
    </div>
  )
}
