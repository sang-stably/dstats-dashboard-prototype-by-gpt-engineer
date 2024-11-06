import { DashboardData } from './types';

export const fetchDashboardData = async (): Promise<DashboardData> => {
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
      { date: '2024-11-08', circulatingSupply: 3500, amoSupply: 1750 },
      { date: '2024-11-15', circulatingSupply: 7800, amoSupply: 3900 },
      { date: '2024-11-22', circulatingSupply: 16500, amoSupply: 8250 },
      { date: '2024-12-01', circulatingSupply: 42000, amoSupply: 21000 },
      { date: '2024-12-08', circulatingSupply: 125000, amoSupply: 62500 },
      { date: '2024-12-15', circulatingSupply: 275000, amoSupply: 137500 },
      { date: '2024-12-22', circulatingSupply: 460000, amoSupply: 230000 },
      { date: '2025-01-01', circulatingSupply: 820000, amoSupply: 410000 },
      { date: '2025-01-08', circulatingSupply: 1150000, amoSupply: 575000 },
      { date: '2025-01-15', circulatingSupply: 1050000, amoSupply: 525000 }, // Smoother dip
      { date: '2025-01-22', circulatingSupply: 1180000, amoSupply: 590000 },
      { date: '2025-02-01', circulatingSupply: 2000000, amoSupply: 1000000 },
      { date: '2025-02-08', circulatingSupply: 3200000, amoSupply: 1600000 },
      { date: '2025-02-15', circulatingSupply: 4500000, amoSupply: 2250000 },
      { date: '2025-02-22', circulatingSupply: 4300000, amoSupply: 2150000 }, // Smoother correction
      { date: '2025-03-01', circulatingSupply: 4800000, amoSupply: 2400000 },
      { date: '2025-03-08', circulatingSupply: 6000000, amoSupply: 3000000 },
      { date: '2025-03-15', circulatingSupply: 7500000, amoSupply: 3750000 },
      { date: '2025-03-22', circulatingSupply: 7300000, amoSupply: 3650000 }, // Gentler dip
      { date: '2025-04-01', circulatingSupply: 8200000, amoSupply: 4100000 },
      { date: '2025-04-08', circulatingSupply: 10000000, amoSupply: 5000000 },
      { date: '2025-04-15', circulatingSupply: 11500000, amoSupply: 5750000 },
      { date: '2025-04-22', circulatingSupply: 11300000, amoSupply: 5650000 }, // Smoother correction
      { date: '2025-05-01', circulatingSupply: 12300000, amoSupply: 6150000 },
      { date: '2025-05-08', circulatingSupply: 13200000, amoSupply: 6600000 },
      { date: '2025-05-15', circulatingSupply: 13000000, amoSupply: 6500000 }, // Gentler pullback
      { date: '2025-05-22', circulatingSupply: 13600000, amoSupply: 6800000 },
      { date: '2025-06-01', circulatingSupply: 14200000, amoSupply: 7100000 },
      { date: '2025-06-08', circulatingSupply: 14600000, amoSupply: 7300000 },
      { date: '2025-06-15', circulatingSupply: 14900000, amoSupply: 7450000 },
      { date: '2025-06-22', circulatingSupply: 15100000, amoSupply: 7550000 },
      { date: '2025-06-30', circulatingSupply: 15234567, amoSupply: 7617283 },
    ],
    collateralDistribution: [
      { name: 'sFRAX', value: 8500000, color: '#8702ff' },
      { name: 'sDAI', value: 4200000, color: '#a64dff' },
      { name: 'sUSDe', value: 2534567, color: '#c29fff' },
    ]
  };
};