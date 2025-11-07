import { STOCKS } from '@/lib/constants';
import { StockCard } from '@/components/StockCard';

export default function Dashboard() {
  return (
    <div className='min-h-screen bg-linear-to-br from-black via-gray-900 to-black p-8 text-white'>
      <div className='mt-2 text-2xl font-bold text-gray-300 sm:text-4xl'>
        Stock Market Dashboard:
      </div>
      <div className='mt-6 grid grid-cols-1 gap-6 sm:mt-10 sm:gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {STOCKS.map((stock, index) => (
          <StockCard key={stock.symbol} symbol={stock.symbol} name={stock.name} index={index} />
        ))}
      </div>
    </div>
  );
}
