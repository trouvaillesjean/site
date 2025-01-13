import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import SellerPage from './pages/SellerPage';
import BuyerPage from './pages/BuyerPage';
import OrderPage from './pages/OrderPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seller" element={<SellerPage />} />
        <Route path="/buyer" element={<BuyerPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Layout>
  );
}