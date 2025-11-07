'use client';

import { LineChart } from './LineChart';
import { StockChartTooltip } from './StockChartTooltip';
import { formatCurrency, ChartDataPoint } from '@/lib/chartUtils';

interface StockPriceChartProps {
  data: ChartDataPoint[];
}

export function StockPriceChart({ data }: StockPriceChartProps) {
  return (
    <div className='mb-8'>
      <LineChart
        className='h-80 select-none'
        data={data}
        index='date'
        categories={['close']}
        colors={['blue']}
        valueFormatter={formatCurrency}
        customTooltip={StockChartTooltip}
        yAxisWidth={70}
      />
    </div>
  );
}
