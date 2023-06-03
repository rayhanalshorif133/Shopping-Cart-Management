import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import ProductView from '../../features/products/ProductView';
import { fetchProducts } from '../../features/products/productsSlice';

export default function Home() {

  const dispatch = useDispatch();

  const products = useSelector(state => state.product);
  const { data, isLoading } = products;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className='mt-12'>
      <div className="alert" role="alert">
        <strong className="font-bold">PRODUCTS</strong>

      </div>
      {
        isLoading ? <Loading /> : <ProductView data={data} />
      }
    </div>
  )
}
