import { getStockData } from '@/lib/api';
import { mapTimeSeriesDataToLineChart } from '@/lib/chartUtils';
import { StockPriceChart } from '@/components/StockPriceChart';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';

export default async function StockDetails({ params }: { params: Promise<{ symbol: string }> }) {
  const { symbol } = await params;

  const { overview, timeSeries } = await getStockData(symbol);

  const chartData = mapTimeSeriesDataToLineChart(timeSeries);
  const latestPrice = chartData[chartData.length - 1]?.close;

  return (
    <div className='dark flex h-full w-full flex-col items-center bg-black text-white'>
      <header className='mt-8 flex items-center gap-10 p-10'>
        <Avatar className='h-20 w-20'>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className='text-4xl font-bold'>{overview.Name || 'N/A'}</h1>
          <dl className='mt-4 flex flex-col sm:mt-2 sm:flex-row sm:gap-4'>
            <div>
              <dt className='inline text-gray-400'>Ticker Symbol: </dt>
              <dd className='inline font-semibold text-[#00CED1]'>${overview.Symbol || 'N/A'}</dd>
            </div>
            <div>
              <dt className='inline text-gray-400'>Latest Price: </dt>
              <dd className='inline font-semibold text-[#00CED1]'>${latestPrice}</dd>
            </div>
          </dl>
        </div>
      </header>
      <div className='mt-10 w-full max-w-4xl rounded-md border bg-[#1A1A1A] p-6'>
        <dl className='grid grid-cols-2 gap-x-8 gap-y-4 border-b border-gray-700 pb-6'>
          <div>
            <dt className='text-sm text-gray-400'>Asset Type</dt>
            <dd className='mt-1 font-medium text-[#00CED1]'>{overview.AssetType || 'N/A'}</dd>
          </div>

          <div>
            <dt className='text-sm text-gray-400'>Exchange</dt>
            <dd className='mt-1 font-medium text-[#00CED1]'>{overview.Exchange || 'N/A'}</dd>
          </div>

          <div>
            <dt className='text-sm text-gray-400'>Sector</dt>
            <dd className='mt-1 font-medium text-[#00CED1]'>{overview.Sector || 'N/A'}</dd>
          </div>

          <div>
            <dt className='text-sm text-gray-400'>Industry</dt>
            <dd className='mt-1 font-medium text-[#00CED1]'>{overview.Industry || 'N/A'}</dd>
          </div>

          <div className='col-span-2'>
            <dt className='text-sm text-gray-400'>Market Capitalization</dt>
            <dd className='mt-1 font-medium text-[#00CED1]'>
              {overview.MarketCapitalization || 'N/A'}
            </dd>
          </div>
        </dl>

        <div className='mt-6'>
          <h2 className='mb-3 text-lg font-semibold text-gray-200'>Description</h2>
          <p className='text-sm leading-relaxed text-gray-300'>{overview.Description || 'N/A'}</p>
        </div>
      </div>
      <div className='mt-10 h-full w-full max-w-4xl'>
        <StockPriceChart data={chartData} />
      </div>
    </div>
  );
}
