//core
import { motion } from 'framer-motion';
import { AlertTriangle, DollarSign, Package, TrendingUp } from 'lucide-react';

//components
import Header from '../components/common/Header';
import StatCard from '../components/common/StatCard';
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart';
import SalesTrendChart from '../components/products/SalesTrendChart';
import ProductsTable from '../components/products/ProductsTable';

const productsData = [
  { name: 'Total Products', icon: Package,  value: 1234, color: '#6366F1' },
  { name: 'Top Selling', icon: TrendingUp, value: 89, color: '#10B981' },
  { name: 'Low Stock', icon: AlertTriangle, value: 23, color: '#F59E0B' },
  { name: 'Total Revenue', icon: DollarSign, value: '$543,210', color: '#EF4444' },
    
];
const ProductsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Products Dashboard' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {productsData.map( ( item ) => (
            <StatCard key={item.name} name={item.name} icon={item.icon} value={item.value} color={item.color} />
          ) )}
        </motion.div>
        <ProductsTable />
        <div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};
export default ProductsPage; 