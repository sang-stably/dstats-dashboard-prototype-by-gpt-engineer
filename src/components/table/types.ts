export interface UserPosition {
  lastActivity: string;
  address: string;
  dusdSupplied: number;
  dusdDebt: number;
  collateralSupplied: string[];
  collateralValue: number;
  currentLTV: number;
  maxLTV: number;
  liquidationLTV: number;
  healthFactor: number;
  healthIndicator: string;
}

export type SortConfig = {
  key: keyof UserPosition | null;
  direction: 'asc' | 'desc';
};