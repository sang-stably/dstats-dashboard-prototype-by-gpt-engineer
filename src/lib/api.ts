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
      { date: '2024-11-08', circulatingSupply: 1200, amoSupply: 600 },
      { date: '2024-11-15', circulatingSupply: 3500, amoSupply: 1750 },
      { date: '2024-11-22', circulatingSupply: 8900, amoSupply: 4450 },
      { date: '2024-12-01', circulatingSupply: 22000, amoSupply: 11000 },
      { date: '2024-12-08', circulatingSupply: 42000, amoSupply: 21000 },
      { date: '2024-12-15', circulatingSupply: 69000, amoSupply: 34500 },
      { date: '2024-12-22', circulatingSupply: 103000, amoSupply: 51500 },
      { date: '2025-01-01', circulatingSupply: 158000, amoSupply: 79000 },
      { date: '2025-01-08', circulatingSupply: 220000, amoSupply: 110000 },
      { date: '2025-01-15', circulatingSupply: 305000, amoSupply: 152500 },
      { date: '2025-01-22', circulatingSupply: 420000, amoSupply: 210000 },
      { date: '2025-02-01', circulatingSupply: 567000, amoSupply: 283500 },
      { date: '2025-02-08', circulatingSupply: 740000, amoSupply: 370000 },
      { date: '2025-02-15', circulatingSupply: 960000, amoSupply: 480000 },
      { date: '2025-02-22', circulatingSupply: 1234000, amoSupply: 617000 },
      { date: '2025-03-01', circulatingSupply: 1580000, amoSupply: 790000 },
      { date: '2025-03-08', circulatingSupply: 1970000, amoSupply: 985000 },
      { date: '2025-03-15', circulatingSupply: 2420000, amoSupply: 1210000 },
      { date: '2025-03-22', circulatingSupply: 2910000, amoSupply: 1455000 },
      { date: '2025-04-01', circulatingSupply: 3450000, amoSupply: 1725000 },
      { date: '2025-04-08', circulatingSupply: 4050000, amoSupply: 2025000 },
      { date: '2025-04-15', circulatingSupply: 4680000, amoSupply: 2340000 },
      { date: '2025-04-22', circulatingSupply: 5380000, amoSupply: 2690000 },
      { date: '2025-05-01', circulatingSupply: 6120000, amoSupply: 3060000 },
      { date: '2025-05-08', circulatingSupply: 6900000, amoSupply: 3450000 },
      { date: '2025-05-15', circulatingSupply: 7740000, amoSupply: 3870000 },
      { date: '2025-05-22', circulatingSupply: 8630000, amoSupply: 4315000 },
      { date: '2025-06-01', circulatingSupply: 9570000, amoSupply: 4785000 },
      { date: '2025-06-08', circulatingSupply: 10560000, amoSupply: 5280000 },
      { date: '2025-06-15', circulatingSupply: 11590000, amoSupply: 5795000 },
      { date: '2025-06-22', circulatingSupply: 12680000, amoSupply: 6340000 },
      { date: '2025-06-30', circulatingSupply: 15234567, amoSupply: 7617283 },
    ],
    collateralDistribution: [
      { name: 'sFRAX', value: 8500000, color: '#8702ff' },
      { name: 'sDAI', value: 4200000, color: '#a64dff' },
      { name: 'sUSDe', value: 2534567, color: '#c29fff' },
    ]
  };
};