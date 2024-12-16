import { Routes, Route } from 'react-router-dom';
import OverviewPage from './pages/OverviewPage/index.jsx';
import ProductsPage from './pages/ProductsPage/index.jsx';

function App() {
  return ( 
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <Routes>
        <Route path="/" element={<OverviewPage/>} />
        <Route path="/prodacts" element={<ProductsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
