//core
import { Routes, Route } from 'react-router-dom';
//components
import Sidebar from './components/common/Sidebar.jsx';
//pages
import OverviewPage from './pages/OverviewPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import UsersPage from './pages/UsersPage.jsx';
import SalesPage from './pages/SalesPage.jsx';
import OrdersPage from './pages/OrdersPage.jsx';
import AnalyticsPage from './pages/AnalyticsPage.jsx';

function App() {
  return ( 
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"/>
        <div className="absolute inset-0 backdrop-blur"/>
      </div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<OverviewPage/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/users" element={<UsersPage/>} />
        <Route path="/sales" element={<SalesPage/>} />
        <Route path="/orders" element={<OrdersPage/>} />
        <Route path="/analytics" element={<AnalyticsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
