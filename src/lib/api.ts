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
      { date: '2024-11-08', circulatingSupply: 2500, amoSupply: 1250 },
      { date: '2024-11-15', circulatingSupply: 8000, amoSupply: 4000 },
      { date: '2024-11-22', circulatingSupply: 15000, amoSupply: 7500 },
      { date: '2024-12-01', circulatingSupply: 45000, amoSupply: 22500 },
      { date: '2024-12-08', circulatingSupply: 120000, amoSupply: 60000 },
      { date: '2024-12-15', circulatingSupply: 280000, amoSupply: 140000 },
      { date: '2024-12-22', circulatingSupply: 450000, amoSupply: 225000 },
      { date: '2025-01-01', circulatingSupply: 850000, amoSupply: 425000 },
      { date: '2025-01-08', circulatingSupply: 1200000, amoSupply: 600000 },
      { date: '2025-01-15', circulatingSupply: 980000, amoSupply: 490000 }, // Market correction
      { date: '2025-01-22', circulatingSupply: 1150000, amoSupply: 575000 },
      { date: '2025-02-01', circulatingSupply: 2100000, amoSupply: 1050000 },
      { date: '2025-02-08', circulatingSupply: 3400000, amoSupply: 1700000 },
      { date: '2025-02-15', circulatingSupply: 4800000, amoSupply: 2400000 },
      { date: '2025-02-22', circulatingSupply: 4200000, amoSupply: 2100000 }, // Market correction
      { date: '2025-03-01', circulatingSupply: 4900000, amoSupply: 2450000 },
      { date: '2025-03-08', circulatingSupply: 6200000, amoSupply: 3100000 },
      { date: '2025-03-15', circulatingSupply: 7800000, amoSupply: 3900000 },
      { date: '2025-03-22', circulatingSupply: 7200000, amoSupply: 3600000 }, // Small dip
      { date: '2025-04-01', circulatingSupply: 8500000, amoSupply: 4250000 },
      { date: '2025-04-08', circulatingSupply: 10200000, amoSupply: 5100000 },
      { date: '2025-04-15', circulatingSupply: 11800000, amoSupply: 5900000 },
      { date: '2025-04-22', circulatingSupply: 11200000, amoSupply: 5600000 }, // Small correction
      { date: '2025-05-01', circulatingSupply: 12500000, amoSupply: 6250000 },
      { date: '2025-05-08', circulatingSupply: 13400000, amoSupply: 6700000 },
      { date: '2025-05-15', circulatingSupply: 13100000, amoSupply: 6550000 }, // Minor pullback
      { date: '2025-05-22', circulatingSupply: 13800000, amoSupply: 6900000 },
      { date: '2025-06-01', circulatingSupply: 14300000, amoSupply: 7150000 },
      { date: '2025-06-08', circulatingSupply: 14800000, amoSupply: 7400000 },
      { date: '2025-06-15', circulatingSupply: 15000000, amoSupply: 7500000 },
      { date: '2025-06-22', circulatingSupply: 14700000, amoSupply: 7350000 }, // Final consolidation
      { date: '2025-06-30', circulatingSupply: 15234567, amoSupply: 7617283 },
    ],
    collateralDistribution: [
      { name: 'sFRAX', value: 8500000, color: '#8702ff' },
      { name: 'sDAI', value: 4200000, color: '#a64dff' },
      { name: 'sUSDe', value: 2534567, color: '#c29fff' },
    ]
  };
};