export interface Stock {
  symbol: string;
  name: string;
}

export const STOCKS: Stock[] = [
  { symbol: 'AMD', name: 'AMD' },
  { symbol: 'NVDA', name: 'NVIDIA Corporation' },
  { symbol: 'MSFT', name: 'Microsoft Corporation' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.' },
  { symbol: 'META', name: 'Meta Platforms Inc.' },
  { symbol: 'AAPL', name: 'Apple Inc.' },
  { symbol: 'AMZN', name: 'Amazon.com Inc.' },
  { symbol: 'TSLA', name: 'Tesla Inc.' },
  { symbol: 'ORCL', name: 'Oracle Corporation' },
  { symbol: 'IBM', name: 'IBM' },
  { symbol: 'CRM', name: 'Salesforce Inc.' },
  { symbol: 'PLTR', name: 'Palantir Technologies' },
  { symbol: 'SNOW', name: 'Snowflake Inc.' },
  { symbol: 'AVGO', name: 'Broadcom Inc.' },
  { symbol: 'INTC', name: 'Intel Corporation' },
  { symbol: 'ARM', name: 'ARM Holdings' },
];
