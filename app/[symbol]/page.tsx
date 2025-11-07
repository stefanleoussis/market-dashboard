import { getStockData } from '@/lib/api';

export default async function StockDetails({ params }: { params: Promise<{ symbol: string }> }) {
  const { symbol } = await params;

  const { overview, timeSeries } = await getStockData(symbol);

  return <div></div>;
}
