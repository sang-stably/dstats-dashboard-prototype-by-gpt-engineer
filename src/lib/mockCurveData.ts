export const curveMetrics = {
  dusdFraxTvl: 1000000,
  dusdAmoTvl: 500000,
  amoPoolShare: 50,
  volume24h: 694200,
  poolFees24h: 69.4
};

export const curveChartData = {
  lpPrice: Array.from({ length: 30 }, (_, i) => {
    const basePrice = 1.002;
    const randomVariation = Math.random() * 0.004 - 0.002;
    const open = basePrice + randomVariation;
    const close = basePrice + Math.random() * 0.004 - 0.002;
    const high = Math.max(open, close) + Math.random() * 0.002;
    const low = Math.min(open, close) - Math.random() * 0.002;
    
    return {
      date: new Date(2023, 10, i + 1).toISOString(),
      open,
      high,
      low,
      close
    };
  }),
  tvl: Array.from({ length: 30 }, (_, i) => {
    const progress = i / 29; // 0 to 1
    const totalValue = 600000 + (400000 * progress); // Smooth increase from 600k to 1M
    const dusdRatio = 0.45 + (progress * 0.1); // Smooth increase in dUSD ratio from 45% to 55%
    const dusdValue = totalValue * dusdRatio;
    const fraxValue = totalValue * (1 - dusdRatio);
    
    return {
      date: new Date(2023, 10, i + 1).toISOString(),
      dusd: dusdValue,
      frax: fraxValue,
      total: totalValue
    };
  }),
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
