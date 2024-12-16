//core
import { motion } from 'framer-motion';
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

//components
import Header from '../components/common/Header';
import StatCard from '../components/common/StatCard';
import SalesOverviewChart from '../components/sales/SalesOverviewChart';
import SalesByCategoryChart from '../components/sales/SalesByCategoryChart';
import DailySalesTrend from '../components/sales/DailySalesTrend';

const salesStats = {
  totalRevenue: '$1,234,567',
  averageOrderValue: '$78.90',
  conversionRate: '3.45%',
  salesGrowth: '12.3%',
};

const salesData = [
  { name: 'Total Revenue', icon: DollarSign, value: salesStats.totalRevenue, color: '#6366F1' },
  { name: 'Avg. Order Value', icon: ShoppingCart, value: salesStats.averageOrderValue, color: '#10B981' },
  { name: 'Conversion Rate', icon: TrendingUp, value: salesStats.conversionRate, color: '#F59E0B' },
  { name: 'Sales Growth', icon: CreditCard, value: salesStats.salesGrowth, color: '#EF4444' }
];

const SalesPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Sales Dashboard' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {salesData.map( ( item ) => (
            <StatCard key={item.name} name={item.name} icon={item.icon} value={item.value} color={item.color} />
          ) )}
        </motion.div>

        <SalesOverviewChart />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <SalesByCategoryChart />
          <DailySalesTrend />
        </div>
      </main>
    </div>
  );
};
export default SalesPage; 