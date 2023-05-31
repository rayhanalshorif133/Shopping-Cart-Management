import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../../features/counter/counterSlice';
import { fetchProducts } from '../../features/products/productsSlice';

export default function Home() {

  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter.count);
  const products = useSelector(state => state.product);
  const { data, isLoading, error, status } = products;
  const counterIncrement = () => {
    dispatch(increment());
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <h2>Products</h2>
      <div>
        {console.log(data)}
      </div>
    </>
  )
}
