import { DashboardData } from './types';

// Simulated API call - replace with real API endpoint later
export const fetchDashboardData = async (): Promise<DashboardData> => {
  // Simulating API latency
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    metrics: {
      totalSupply: 15234567,
      availableToBorrow: 5678901,
      totalDebt: 9555666,
      totalCollateralTVL: 25789012,
      rawSupplyAPR: 4.52,
      rawBorrowAPR: 6.75,
      netRebateAPR: 2.23,
      utilizationRatio: 62.8
    },
    supplyData: [
      { date: '2024-11-01', circulatingSupply: 0, amoSupply: 0 },
      { date: '2024-11-15', circulatingSupply: 100000, amoSupply: 50000 },
      { date: '2024-12-01', circulatingSupply: 500000, amoSupply: 250000 },
      { date: '2024-12-15', circulatingSupply: 1500000, amoSupply: 750000 },
      { date: '2025-01-01', circulatingSupply: 3000000, amoSupply: 1500000 },
      { date: '2025-01-15', circulatingSupply: 5000000, amoSupply: 2500000 },
      { date: '2025-02-01', circulatingSupply: 8000000, amoSupply: 4000000 },
      { date: '2025-02-15', circulatingSupply: 12000000, amoSupply: 6000000 },
      { date: '2025-03-01', circulatingSupply: 17000000, amoSupply: 8500000 },
      { date: '2025-03-15', circulatingSupply: 23000000, amoSupply: 11500000 },
      { date: '2025-04-01', circulatingSupply: 30000000, amoSupply: 15000000 },
      { date: '2025-04-15', circulatingSupply: 38000000, amoSupply: 19000000 },
      { date: '2025-05-01', circulatingSupply: 47000000, amoSupply: 23500000 },
      { date: '2025-05-15', circulatingSupply: 57000000, amoSupply: 28500000 },
      { date: '2025-06-01', circulatingSupply: 68000000, amoSupply: 34000000 },
      { date: '2025-06-15', circulatingSupply: 80000000, amoSupply: 40000000 },
      { date: '2025-06-30', circulatingSupply: 95000000, amoSupply: 47500000 },
    ],
    collateralDistribution: [
      { name: 'sFRAX', value: 8500000, color: '#8702ff' },
      { name: 'sDAI', value: 4200000, color: '#a64dff' },
      { name: 'sUSDe', value: 2534567, color: '#c29fff' },
    ]
  };
};