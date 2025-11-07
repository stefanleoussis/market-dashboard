'use client';
import { formatCurrency, formatVolume, formatPercentChange } from '@/lib/chartUtils';
import { TooltipProps } from './LineChart';

export function StockChartTooltip({ active, payload, label }: TooltipProps) {
  if (!active || !payload || payload.length === 0) return null;

  const data = payload[0].payload;
  const percentChange = data.percentChange;
  const isPositive = percentChange >= 0;

  return (
    <div className='rounded-lg border border-gray-200 bg-white p-3 shadow-lg dark:border-gray-800 dark:bg-gray-950'>
      <p className='mb-2 font-semibold text-gray-900 dark:text-gray-50'>{label}</p>
      <div className='space-y-1.5'>
        <div className='flex items-center justify-between gap-4'>
          <span className='text-sm text-gray-600 dark:text-gray-400'>Close Price</span>
          <span className='font-medium text-gray-900 dark:text-gray-50'>
            {formatCurrency(data.close)}
          </span>
        </div>
        <div className='flex items-center justify-between gap-4'>
          <span className='text-sm text-gray-600 dark:text-gray-400'>Volume</span>
          <span className='font-medium text-gray-900 dark:text-gray-50'>
            {formatVolume(data.volume)}
          </span>
        </div>
        <div className='flex items-center justify-between gap-4'>
          <span className='text-sm text-gray-600 dark:text-gray-400'>Change</span>
          <span
            className={`font-medium ${
              isPositive ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'
            }`}
          >
            {formatPercentChange(percentChange)}
          </span>
        </div>
      </div>
    </div>
  );
}
