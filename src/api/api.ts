import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Transaction {
  id: number;
  amount: number;
  date: string;
  category: string;
  essential: boolean;
  remark: string;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    fetchTransactions: builder.query<Transaction[], void>({
      query: () => '/transactions',
    }),
  }),
});

export const { useFetchTransactionsQuery } = api;
