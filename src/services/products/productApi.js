import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products/' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `products`,
        }),
        getProductById: builder.query({
            query: (id) => `products/${id}`,
        }),
    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;