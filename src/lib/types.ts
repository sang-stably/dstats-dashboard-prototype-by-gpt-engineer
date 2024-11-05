export interface MetricCardProps {
  title: string;
  value: number;
  format?: string;
  description: string;
}

export interface NumberCounterProps {
  value: number;
  format?: string;
}

export interface DashboardMetrics {
  totalSupply: number;
  availableToBorrow: number;
  totalDebt: number;
  totalCollateralTVL: number;
  rawSupplyAPR: number;
  rawBorrowAPR: number;
  netRebateAPR: number;
  utilizationRatio: number;
}

export interface SupplyDataPoint {
  date: string;
  circulatingSupply: number;
  amoSupply: number;
}

export interface CollateralDistribution {
  name: string;
  value: number;
  color: string;
}

export interface DashboardData {
  metrics: DashboardMetrics;
  supplyData: SupplyDataPoint[];
  collateralDistribution: CollateralDistribution[];
}