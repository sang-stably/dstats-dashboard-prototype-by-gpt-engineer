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
      { date: '2024-01-01', circulatingSupply: 100000, amoSupply: 50000 },
      { date: '2024-01-04', circulatingSupply: 150000, amoSupply: 75000 },
      { date: '2024-01-07', circulatingSupply: 250000, amoSupply: 150000 },
      { date: '2024-01-10', circulatingSupply: 400000, amoSupply: 240000 },
      { date: '2024-01-14', circulatingSupply: 625000, amoSupply: 375000 },
      { date: '2024-01-17', circulatingSupply: 900000, amoSupply: 540000 },
      { date: '2024-01-21', circulatingSupply: 1562500, amoSupply: 937500 },
      { date: '2024-01-24', circulatingSupply: 2500000, amoSupply: 1500000 },
      { date: '2024-01-28', circulatingSupply: 3906250, amoSupply: 2343750 },
      { date: '2024-01-31', circulatingSupply: 4500000, amoSupply: 2700000 },
      { date: '2024-02-04', circulatingSupply: 6000000, amoSupply: 3600000 },
      { date: '2024-02-07', circulatingSupply: 7000000, amoSupply: 4200000 },
      { date: '2024-02-11', circulatingSupply: 8000000, amoSupply: 4800000 },
      { date: '2024-02-14', circulatingSupply: 9000000, amoSupply: 5400000 },
      { date: '2024-02-18', circulatingSupply: 10000000, amoSupply: 6000000 },
      { date: '2024-02-21', circulatingSupply: 11000000, amoSupply: 6600000 },
      { date: '2024-02-25', circulatingSupply: 12000000, amoSupply: 7200000 },
      { date: '2024-02-28', circulatingSupply: 12750000, amoSupply: 7650000 },
      { date: '2024-03-03', circulatingSupply: 13500000, amoSupply: 8100000 },
      { date: '2024-03-07', circulatingSupply: 14000000, amoSupply: 8400000 },
      { date: '2024-03-10', circulatingSupply: 14500000, amoSupply: 8700000 },
      { date: '2024-03-14', circulatingSupply: 14800000, amoSupply: 8880000 },
      { date: '2024-03-17', circulatingSupply: 15234567, amoSupply: 9100000 },
      { date: '2024-03-21', circulatingSupply: 15500000, amoSupply: 9300000 },
      { date: '2024-03-24', circulatingSupply: 15750000, amoSupply: 9450000 },
      { date: '2024-03-27', circulatingSupply: 16000000, amoSupply: 9600000 },
    ],
    collateralDistribution: [
      { name: 'sFRAX', value: 8500000, color: '#8702ff' },
      { name: 'sDAI', value: 4200000, color: '#a64dff' },
      { name: 'sUSDe', value: 2534567, color: '#c29fff' },
    ]
  };
};
