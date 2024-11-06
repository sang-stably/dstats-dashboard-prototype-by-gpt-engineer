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
      { date: '2024-11-01', circulatingSupply: 10000000, amoSupply: 6000000 },
      { date: '2024-11-15', circulatingSupply: 11500000, amoSupply: 6900000 },
      { date: '2024-12-01', circulatingSupply: 13000000, amoSupply: 7800000 },
      { date: '2024-12-15', circulatingSupply: 14500000, amoSupply: 8700000 },
      { date: '2025-01-01', circulatingSupply: 16000000, amoSupply: 9600000 },
      { date: '2025-01-15', circulatingSupply: 17500000, amoSupply: 10500000 },
      { date: '2025-02-01', circulatingSupply: 19000000, amoSupply: 11400000 },
      { date: '2025-02-15', circulatingSupply: 20500000, amoSupply: 12300000 },
      { date: '2025-03-01', circulatingSupply: 22000000, amoSupply: 13200000 },
      { date: '2025-03-15', circulatingSupply: 23500000, amoSupply: 14100000 },
      { date: '2025-04-01', circulatingSupply: 25000000, amoSupply: 15000000 },
      { date: '2025-04-15', circulatingSupply: 26500000, amoSupply: 15900000 },
      { date: '2025-05-01', circulatingSupply: 28000000, amoSupply: 16800000 },
      { date: '2025-05-15', circulatingSupply: 29500000, amoSupply: 17700000 },
      { date: '2025-06-01', circulatingSupply: 31000000, amoSupply: 18600000 },
      { date: '2025-06-15', circulatingSupply: 32500000, amoSupply: 19500000 },
      { date: '2025-06-30', circulatingSupply: 34000000, amoSupply: 20400000 },
    ],
    collateralDistribution: [
      { name: 'sFRAX', value: 8500000, color: '#8702ff' },
      { name: 'sDAI', value: 4200000, color: '#a64dff' },
      { name: 'sUSDe', value: 2534567, color: '#c29fff' },
    ]
  };
};
