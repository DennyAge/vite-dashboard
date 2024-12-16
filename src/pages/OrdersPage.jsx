//core
import { CheckCircle, Clock, DollarSign, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
//components
import Header from '../components/common/Header';
import StatCard from '../components/common/StatCard';
import DailyOrders from '../components/orders/DailyOrders';
import OrderDistribution from '../components/orders/OrderDistribution';
import OrdersTable from '../components/orders/OrdersTable';

const orderStats = {
  totalOrders: '1,234',
  pendingOrders: '56',
  completedOrders: '1,178',
  totalRevenue: '$98,765',
};
const ordersData = [
  { name: 'Total Orders', icon: ShoppingBag, value: orderStats.totalOrders, color: '#6366F1' },
  { name: 'Pending Orders', icon: Clock, value: orderStats.pendingOrders, color: '#F59E0B' },
  { name: 'Completed Orders', icon: CheckCircle, value: orderStats.completedOrders, color: '#10B981' },
  { name: 'Total Revenue', icon: DollarSign, value: orderStats.totalRevenue, color: '#EF4444' },
];

const OrdersPage = () => {
  return (
    <div className='flex-1 relative z-10 overflow-auto'>
      <Header title={'Orders Dashboard'} />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {ordersData.map( ( item ) => (
            <StatCard key={item.name} name={item.name} icon={item.icon} value={item.value} color={item.color} />
          ) )}
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <DailyOrders />
          <OrderDistribution />
        </div>

        <OrdersTable />
      </main>
    </div>
  );
};
export default OrdersPage; 