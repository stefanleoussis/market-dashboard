import { CompanyOverview, TimeSeriesDaily } from '@/types/stock';

const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
const BASE_URL = 'https://www.alphavantage.co/query';

export async function getCompanyOverview(symbol: string): Promise<CompanyOverview> {
  const response = await fetch(`${BASE_URL}?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY}`, {
    next: { revalidate: 1000 },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch company overview');
  }

  const data = await response.json();

  if (data['Information']) {
    throw new Error('API rate limit exceeded.');
  }

  return data;
}

export async function getTimeSeriesDaily(symbol: string): Promise<TimeSeriesDaily> {
  const response = await fetch(
    `${BASE_URL}?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`,
    { next: { revalidate: 1000 } }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch time series data');
  }

  const data = await response.json();

  if (data['Information']) {
    throw new Error('API rate limit exceeded.');
  }

  return data;
}

export async function getStockData(symbol: string) {
  const [overview, timeSeries] = await Promise.all([
    getCompanyOverview(symbol),
    getTimeSeriesDaily(symbol),
  ]);

  return { overview, timeSeries };
}
