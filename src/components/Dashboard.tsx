// src/components/Dashboard.tsx

import { useGetTransactionsQuery } from '../features/api/apiSlice';
import { Transaction } from '../types'; // Import the Transaction type

const Dashboard = () => {
  const { data: transactions = [], error, isLoading } = useGetTransactionsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching transactions</div>;

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((transaction: Transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.amount}</td>
                <td>{transaction.date}</td>
                <td>{transaction.category}</td>
                <td>{transaction.remark}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No transactions found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
