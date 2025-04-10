// src/lib/mockData.js
export const statsData = {
  totalOpenInterest: {
    value: 3728964138.26,
    change: 0.11
  },
  volume24h: {
    value: 13248802438.90,
    change: 5.57
  }
};

export const topGainers = [
  { symbol: 'VINE', price: 0.03982, change: 37.53 },
  { symbol: 'FASTCOIN', price: 0.7328, change: 33.67 },
  { symbol: 'POPCAT', price: 0.1725, change: 30.69 },
];

export const topLosers = [
  { symbol: 'CATI', price: 0.08592, change: -10.55 },
  { symbol: 'ZLO', price: 33.35, change: -5.60 },
  { symbol: 'GRASS', price: 1.58, change: -4.34 },
];

export const tradingPairs = [
  {
    id: "BTC-HyperLiquid",
    protocol: "HyperLiquid",
    market: "BTC",
    price: 52315.0,
    marketCap: "1.64T",
    volume24h: "5.92B",
    change5m: 0.06,
    change1h: -0.15,
    change24h: 1.25, // 24-hour price change percentage
    Funding1Y: 0.015, // 1-year funding rate
    "-2% Depth": 120.5, // Depth at -2% from current price (in millions)
    "+2% Depth": 115.8, // Depth at +2% from current price (in millions)
    ShortsOI: 245.3, // Shorts Open Interest (in millions)
    LongOI: 320.7, // Longs Open Interest (in millions)
  },
  {
    id: "ETH-HyperLiquid",
    protocol: "HyperLiquid",
    market: "ETH",
    price: 1815.05,
    marketCap: "201.30B",
    volume24h: "2.06B",
    change5m: 0.18,
    change1h: -0.23,
    change24h: -0.85,
    Funding1Y: 0.012,
    "-2% Depth": 45.2,
    "+2% Depth": 48.9,
    ShortsOI: 98.4,
    LongOI: 112.6,
  },
  {
    id: "SOL-HyperLiquid",
    protocol: "HyperLiquid",
    market: "SOL",
    price: 118.1,
    marketCap: "58.38B",
    volume24h: "948.39M",
    change5m: 0.08,
    change1h: -0.16,
    change24h: 2.1,
    Funding1Y: 0.018,
    "-2% Depth": 22.7,
    "+2% Depth": 25.3,
    ShortsOI: 55.8,
    LongOI: 67.2,
  },
  {
    id: "SOL-Jupiter",
    protocol: "Jupiter",
    market: "SOL",
    price: 118.1,
    marketCap: "58.38B",
    volume24h: "883.83M",
    change5m: 0.05,
    change1h: -0.39,
    change24h: 1.95,
    Funding1Y: 0.017,
    "-2% Depth": 20.1,
    "+2% Depth": 23.4,
    ShortsOI: 50.3,
    LongOI: 62.9,
  },
  {
    id: "BTC-GMX",
    protocol: "GMX V2",
    market: "BTC",
    price: 52094.2,
    marketCap: "1.64T",
    volume24h: "408.27M",
    change5m: 0.05,
    change1h: -0.13,
    change24h: 1.15,
    Funding1Y: 0.014,
    "-2% Depth": 95.6,
    "+2% Depth": 90.2,
    ShortsOI: 180.4,
    LongOI: 210.8,
  },
  {
    id: "BTC-Jupiter",
    protocol: "Jupiter",
    market: "BTC",
    price: 52092.28,
    marketCap: "1.64T",
    volume24h: "250.91M",
    change5m: 0.05,
    change1h: -0.13,
    change24h: 1.1,
    Funding1Y: 0.013,
    "-2% Depth": 60.3,
    "+2% Depth": 58.7,
    ShortsOI: 110.5,
    LongOI: 135.2,
  },
  {
    id: "HYPE-HyperLiquid",
    protocol: "HyperLiquid",
    market: "HYPE",
    price: 113.6,
    marketCap: "4.53B",
    volume24h: "245.30M",
    change5m: 1.08,
    change1h: -2.23,
    change24h: -3.45,
    Funding1Y: 0.025,
    "-2% Depth": 15.8,
    "+2% Depth": 14.2,
    ShortsOI: 40.7,
    LongOI: 35.9,
  },
  {
    id: "ETH-Jupiter",
    protocol: "Jupiter",
    market: "ETH",
    price: 1815.55,
    marketCap: "201.30B",
    volume24h: "217.90M",
    change5m: 0.18,
    change1h: -0.23,
    change24h: -0.9,
    Funding1Y: 0.011,
    "-2% Depth": 38.4,
    "+2% Depth": 40.1,
    ShortsOI: 85.6,
    LongOI: 95.3,
  },
  {
    id: "ETH-GMX",
    protocol: "GMX V2",
    market: "ETH",
    price: 1815.52,
    marketCap: "201.30B",
    volume24h: "186.79M",
    change5m: 0.18,
    change1h: -0.22,
    change24h: -0.88,
    Funding1Y: 0.013,
    "-2% Depth": 35.7,
    "+2% Depth": 37.2,
    ShortsOI: 78.9,
    LongOI: 88.4,
  },
  {
    id: "FASTCOIN-HyperLiquid",
    protocol: "HyperLiquid",
    market: "FASTCOIN",
    price: 0.7334,
    marketCap: "750.24M",
    volume24h: "175.46M",
    change5m: 0.03,
    change1h: -0.4,
    change24h: 0.75,
    Funding1Y: 0.02,
    "-2% Depth": 12.3,
    "+2% Depth": 13.8,
    ShortsOI: 25.4,
    LongOI: 30.1,
  },
  {
    id: "BTC-dYdX",
    protocol: "dYdX",
    market: "BTC",
    price: 52115.97,
    marketCap: "1.64T",
    volume24h: "163.23M",
    change5m: 0.03,
    change1h: -0.12,
    change24h: 1.2,
    Funding1Y: 0.014,
    "-2% Depth": 50.6,
    "+2% Depth": 48.9,
    ShortsOI: 95.2,
    LongOI: 115.7,
  },
  {
    id: "ETH-dYdX",
    protocol: "dYdX",
    market: "ETH",
    price: 1815.35,
    marketCap: "201.30B",
    volume24h: "95.54M",
    change5m: 0.14,
    change1h: -0.2,
    change24h: -0.82,
    Funding1Y: 0.012,
    "-2% Depth": 25.8,
    "+2% Depth": 27.4,
    ShortsOI: 45.3,
    LongOI: 52.6,
  },
  {
    id: "SUI-HyperLiquid",
    protocol: "HyperLiquid",
    market: "SUI",
    price: 2.17,
    marketCap: "7.22B",
    volume24h: "71.64M",
    change5m: 0.3,
    change1h: 0.7,
    change24h: 3.15,
    Funding1Y: 0.022,
    "-2% Depth": 8.9,
    "+2% Depth": 9.5,
    ShortsOI: 18.7,
    LongOI: 22.4,
  },
  {
    id: "SOL-Drift",
    protocol: "Drift",
    market: "SOL",
    price: 118.06,
    marketCap: "58.38B",
    volume24h: "66.96M",
    change5m: 0.07,
    change1h: -0.2,
    change24h: 2.05,
    Funding1Y: 0.016,
    "-2% Depth": 15.2,
    "+2% Depth": 16.8,
    ShortsOI: 32.1,
    LongOI: 38.9,
  },
  {
    id: "XRP-GMX",
    protocol: "GMX V2",
    market: "XRP",
    price: 2.0,
    marketCap: "118.56B",
    volume24h: "58.83M",
    change5m: 0.49,
    change1h: -0.49,
    change24h: -1.25,
    Funding1Y: 0.019,
    "-2% Depth": 10.4,
    "+2% Depth": 11.2,
    ShortsOI: 20.5,
    LongOI: 25.3,
  },
  {
    id: "IBIA-HyperLiquid",
    protocol: "HyperLiquid",
    market: "IBIA",
    price: 3.93,
    marketCap: "547.87M",
    volume24h: "56.83M",
    change5m: 0.55,
    change1h: -1.52,
    change24h: -2.8,
    Funding1Y: 0.023,
    "-2% Depth": 7.5,
    "+2% Depth": 8.1,
    ShortsOI: 15.8,
    LongOI: 12.9,
  },
  {
    id: "DOGE-HyperLiquid",
    protocol: "HyperLiquid",
    market: "DOGE",
    price: 0.1582,
    marketCap: "23.86B",
    volume24h: "53.03M",
    change5m: 0.26,
    change1h: 0.32,
    change24h: 1.65,
    Funding1Y: 0.017,
    "-2% Depth": 9.8,
    "+2% Depth": 10.5,
    ShortsOI: 22.3,
    LongOI: 28.7,
  },
  {
    id: "ADA-HyperLiquid",
    protocol: "HyperLiquid",
    market: "ADA",
    price: 0.6288,
    marketCap: "22.28B",
    volume24h: "48.16M",
    change5m: 0.38,
    change1h: 0.22,
    change24h: 0.95,
    Funding1Y: 0.015,
    "-2% Depth": 8.2,
    "+2% Depth": 9.0,
    ShortsOI: 18.4,
    LongOI: 23.1,
  },
  {
    id: "ETH-Drift",
    protocol: "Drift",
    market: "ETH",
    price: 1815.28,
    marketCap: "201.30B",
    volume24h: "47.71M",
    change5m: 0.19,
    change1h: -0.2,
    change24h: -0.87,
    Funding1Y: 0.012,
    "-2% Depth": 12.6,
    "+2% Depth": 13.4,
    ShortsOI: 20.8,
    LongOI: 25.2,
  },
  {
    id: "BTC-Drift",
    protocol: "Drift",
    market: "BTC",
    price: 52102.02,
    marketCap: "1.64T",
    volume24h: "37.64M",
    change5m: 0.05,
    change1h: -0.14,
    change24h: 1.18,
    Funding1Y: 0.013,
    "-2% Depth": 10.5,
    "+2% Depth": 11.2,
    ShortsOI: 15.7,
    LongOI: 18.9,
  },
  {
    id: "H2PE-HyperLiquid",
    protocol: "HyperLiquid",
    market: "H2PE",
    price: 0.006784,
    marketCap: "2.83B",
    volume24h: "35.59M",
    change5m: 0.24,
    change1h: -0.19,
    change24h: -0.45,
    Funding1Y: 0.021,
    "-2% Depth": 6.8,
    "+2% Depth": 7.3,
    ShortsOI: 12.4,
    LongOI: 15.6,
  },
  {
    id: "SOL-dYdX",
    protocol: "dYdX",
    market: "SOL",
    price: 118.13,
    marketCap: "58.38B",
    volume24h: "32.22M",
    change5m: 0.08,
    change1h: -0.22,
    change24h: 2.0,
    Funding1Y: 0.016,
    "-2% Depth": 7.9,
    "+2% Depth": 8.5,
    ShortsOI: 14.2,
    LongOI: 17.8,
  },
  {
    id: "TRUMP-HyperLiquid",
    protocol: "HyperLiquid",
    market: "TRUMP",
    price: 5.08,
    marketCap: "1.53B",
    volume24h: "27.70M",
    change5m: 0.31,
    change1h: 0.17,
    change24h: 1.35,
    Funding1Y: 0.024,
    "-2% Depth": 5.6,
    "+2% Depth": 6.1,
    ShortsOI: 10.3,
    LongOI: 13.5,
  },
];

export const formatPrice = (price) => {
  return price < 1
    ? `$${price.toFixed(price < 0.0001 ? 6 : 4)}`
    : `$${price.toFixed(2)}`;
};

export const formatLargeNumber = (num) => {
  if (num >= 1e9) {
    return `$${(num / 1e9).toFixed(2)}B`;
  }
  if (num >= 1e6) {
    return `$${(num / 1e6).toFixed(2)}M`;
  }
  return `$${num.toFixed(2)}`;
};

export const formatChange = (value) => {
  const formattedValue = value.toFixed(2);
  return value >= 0 ? `+${formattedValue}%` : `${formattedValue}%`;
};