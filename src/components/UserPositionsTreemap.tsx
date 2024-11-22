import { Treemap } from '@ant-design/plots';
import { UserPosition } from './table/types';

interface TreemapProps {
  data: UserPosition[];
}

const UserPositionsTreemap = ({ data }: TreemapProps) => {
  const getColorByHealthFactor = (healthFactor: number) => {
    if (!healthFactor) return '#64748b'; // gray for positions with no health factor
    if (healthFactor >= 1.5) return '#22c55e'; // green for safe
    if (healthFactor >= 1.2) return '#fbbf24'; // yellow for warning
    return '#ef4444'; // red for danger
  };

  // Filter out positions with no collateral value and format data for Treemap
  const treeMapData = {
    name: 'positions',
    children: data
      .filter(pos => pos.collateralValue > 0)
      .map(position => ({
        name: `${position.address.slice(0, 6)}...${position.address.slice(-4)}`,
        value: position.collateralValue,
        healthFactor: position.healthFactor,
        address: position.address,
        dusdDebt: position.dusdDebt,
        currentLTV: position.currentLTV,
      })),
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const config = {
    data: treeMapData,
    colorField: 'healthFactor',
    color: ({ healthFactor }: { healthFactor: number }) => getColorByHealthFactor(healthFactor),
    tooltip: {
      formatter: (datum: any) => {
        return {
          name: datum.name,
          value: `
            Value: ${formatCurrency(datum.value)}
            Debt: ${formatCurrency(datum.dusdDebt)}
            Health Factor: ${datum.healthFactor.toFixed(2)}
            LTV: ${datum.currentLTV.toFixed(2)}%
          `,
        };
      },
    },
    label: {
      style: {
        fill: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
      },
    },
    animation: {
      appear: {
        animation: 'fade-in',
      },
    },
    drilldown: {
      enabled: false,
    },
    hierarchyConfig: {
      padding: 0.15,
    },
  };

  return (
    <div style={{ height: 400, padding: 16, background: 'rgba(0, 0, 0, 0.2)', borderRadius: 8 }}>
      <Treemap {...config} />
    </div>
  );
};

export default UserPositionsTreemap;