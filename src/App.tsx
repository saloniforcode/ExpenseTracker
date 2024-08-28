// src/App.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddTransaction from './components/AddTransaction';
import EditTransaction from './components/EditTransaction';
import DeleteTransaction from './components/DeleteTransaction';
import './styles/styles.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
        <Route path="/edit-transaction" element={<EditTransaction transaction={{ id: 1, amount: 100, date: '2024-08-28', paymentMode: 'cash', category: 'food', essential: true, remark: 'Dinner' }} />} />
        <Route path="/delete-transaction" element={<DeleteTransaction onDelete={() => console.log('Transaction deleted')} />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
