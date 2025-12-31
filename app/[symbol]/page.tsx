import { getStockData } from '@/lib/api';
import { mapTimeSeriesDataToLineChart } from '@/lib/chartUtils';
import { StockPriceChart } from '@/components/StockPriceChart';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';
import { AnimatedSection } from '@/components/AnimatedSection';
import { STOCK_BY_SYMBOL } from '@/lib/constants';

export const dynamic = 'force-dynamic';

export default async function StockDetails({ params }: { params: Promise<{ symbol: string }> }) {
  const { symbol } = await params;
  try {
    const { overview, timeSeries } = await getStockData(symbol);
    const chartData = mapTimeSeriesDataToLineChart(timeSeries);
    const latestPrice = chartData[chartData.length - 1]?.close;
    return (
      <div className='dark flex h-full w-full flex-col items-center bg-black text-white'>
        <AnimatedSection delay={0} className='mt-8 flex items-center gap-10 p-10'>
          <Avatar className='h-20 w-20'>
            <AvatarImage src={STOCK_BY_SYMBOL[symbol].img} />
            <AvatarFallback className='bg-black'>{symbol.slice(0, 2)}</AvatarFallback>
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
        </AnimatedSection>
        <AnimatedSection
          delay={0.1}
          className='mx-10 mt-10 max-w-4xl rounded-md border bg-[#1A1A1A] p-6 sm:w-full'
        >
          <dl className='grid grid-cols-1 gap-x-8 gap-y-4 border-b border-gray-700 pb-6 sm:grid-cols-2'>
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

            <div className='col-span-1 sm:col-span-2'>
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
        </AnimatedSection>
        <AnimatedSection delay={0.2} className='mt-10 h-full w-full max-w-4xl px-4 pb-70 sm:pb-0'>
          <StockPriceChart data={chartData} />
        </AnimatedSection>
      </div>
    );
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return <div>Error loading stock data. Please try again.</div>;
  }
}
