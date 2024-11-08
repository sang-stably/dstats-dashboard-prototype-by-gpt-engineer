export const curveMetrics = {
  dusdFraxTvl: 1000000,
  dusdAmoTvl: 500000,
  amoPoolShare: 50,
  volume24h: 694200,
  poolFees24h: 69.4
};

export const curveChartData = {
  lpPrice: Array.from({ length: 30 }, (_, i) => {
    const basePrice = 1.002; // Center point between 1 and 1.004
    const randomVariation = Math.random() * 0.002; // Max variation of 0.002 to stay within range
    const open = basePrice + randomVariation - 0.001;
    const close = basePrice + randomVariation - 0.001;
    const high = Math.max(open, close) + (Math.random() * 0.001);
    const low = Math.min(open, close) - (Math.random() * 0.001);
    
    return {
      date: new Date(2023, 10, i + 1).toISOString(),
      open,
      high,
      low,
      close
    };
  }),
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
    value: 12000 + ((13500 - 12000) / 29 * i) + (Math.random() * 200 - 100)
  })),
  amoRevenue: Array.from({ length: 30 }, (_, i) => ({
    date: new Date(2023, 10, i + 1).toISOString(),
    revenue: 5 + Math.random() * 15,
    apy: (Math.random() * 2) + 0.5
  }))
};