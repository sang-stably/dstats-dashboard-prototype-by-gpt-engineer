export const curveMetrics = {
  dusdFraxTvl: 1000000,
  dusdAmoTvl: 500000,
  amoPoolShare: 50,
  volume24h: 694200,
  poolFees24h: 69.4
};

export const curveChartData = {
  lpPrice: Array.from({ length: 30 }, (_, i) => ({
    date: new Date(2023, 10, i + 1).toISOString(),
    value: 1.0 + Math.random() * 0.05
  })),
  tvl: Array.from({ length: 30 }, (_, i) => ({
    date: new Date(2023, 10, i + 1).toISOString(),
    value: 750000 + Math.random() * 250000
  })),
  volume: Array.from({ length: 30 }, (_, i) => ({
    date: new Date(2023, 10, i + 1).toISOString(),
    value: 250000 + Math.random() * 500000
  })),
  fees: Array.from({ length: 30 }, (_, i) => ({
    date: new Date(2023, 10, i + 1).toISOString(),
    value: 11000 + ((13500 - 11000) / 29 * i) + (Math.random() * 200 - 100)
  })),
  amoRevenue: Array.from({ length: 30 }, (_, i) => ({
    date: new Date(2023, 10, i + 1).toISOString(),
    revenue: 5 + Math.random() * 15,
    apy: (Math.random() * 2) + 0.5
  }))
};