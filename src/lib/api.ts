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
      { date: '2024-11-08', circulatingSupply: 25000, amoSupply: 12500 },
      { date: '2024-11-15', circulatingSupply: 75000, amoSupply: 37500 },
      { date: '2024-11-22', circulatingSupply: 180000, amoSupply: 90000 },
      { date: '2024-12-01', circulatingSupply: 450000, amoSupply: 225000 },
      { date: '2024-12-08', circulatingSupply: 850000, amoSupply: 425000 },
      { date: '2024-12-15', circulatingSupply: 1400000, amoSupply: 700000 },
      { date: '2024-12-22', circulatingSupply: 2100000, amoSupply: 1050000 },
      { date: '2025-01-01', circulatingSupply: 3200000, amoSupply: 1600000 },
      { date: '2025-01-08', circulatingSupply: 4500000, amoSupply: 2250000 },
      { date: '2025-01-15', circulatingSupply: 6200000, amoSupply: 3100000 },
      { date: '2025-01-22', circulatingSupply: 8500000, amoSupply: 4250000 },
      { date: '2025-02-01', circulatingSupply: 11500000, amoSupply: 5750000 },
      { date: '2025-02-08', circulatingSupply: 15000000, amoSupply: 7500000 },
      { date: '2025-02-15', circulatingSupply: 19500000, amoSupply: 9750000 },
      { date: '2025-02-22', circulatingSupply: 25000000, amoSupply: 12500000 },
      { date: '2025-03-01', circulatingSupply: 32000000, amoSupply: 16000000 },
      { date: '2025-03-08', circulatingSupply: 40000000, amoSupply: 20000000 },
      { date: '2025-03-15', circulatingSupply: 49000000, amoSupply: 24500000 },
      { date: '2025-03-22', circulatingSupply: 59000000, amoSupply: 29500000 },
      { date: '2025-04-01', circulatingSupply: 70000000, amoSupply: 35000000 },
      { date: '2025-04-08', circulatingSupply: 82000000, amoSupply: 41000000 },
      { date: '2025-04-15', circulatingSupply: 95000000, amoSupply: 47500000 },
      { date: '2025-04-22', circulatingSupply: 109000000, amoSupply: 54500000 },
      { date: '2025-05-01', circulatingSupply: 124000000, amoSupply: 62000000 },
      { date: '2025-05-08', circulatingSupply: 140000000, amoSupply: 70000000 },
      { date: '2025-05-15', circulatingSupply: 157000000, amoSupply: 78500000 },
      { date: '2025-05-22', circulatingSupply: 175000000, amoSupply: 87500000 },
      { date: '2025-06-01', circulatingSupply: 194000000, amoSupply: 97000000 },
      { date: '2025-06-08', circulatingSupply: 214000000, amoSupply: 107000000 },
      { date: '2025-06-15', circulatingSupply: 235000000, amoSupply: 117500000 },
      { date: '2025-06-22', circulatingSupply: 257000000, amoSupply: 128500000 },
      { date: '2025-06-30', circulatingSupply: 280000000, amoSupply: 140000000 },
    ],
    collateralDistribution: [
      { name: 'sFRAX', value: 8500000, color: '#8702ff' },
      { name: 'sDAI', value: 4200000, color: '#a64dff' },
      { name: 'sUSDe', value: 2534567, color: '#c29fff' },
    ]
  };
};