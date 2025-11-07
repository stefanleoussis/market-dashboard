import { getStockData } from '@/lib/api';
import { mapTimeSeriesDataToLineChart } from '@/lib/chartUtils';
import { StockPriceChart } from '@/components/StockPriceChart';

export default async function StockDetails({ params }: { params: Promise<{ symbol: string }> }) {
  const { symbol } = await params;

  const { overview, timeSeries } = await getStockData(symbol);
  const chartData = mapTimeSeriesDataToLineChart(timeSeries);
  return (
    <div>
      <StockPriceChart data={chartData} />
    </div>
  );
}
