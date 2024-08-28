// src/features/api/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Transaction } from '../../types';
// Define the API slice
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }), 
  endpoints: (builder) => ({
    getTransactions: builder.query<Transaction[], void>({
      query: () => '/transactions',
    }),
  }),
});

// Export the hook
export const { useGetTransactionsQuery } = apiSlice;
