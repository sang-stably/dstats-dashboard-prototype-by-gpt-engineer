import { TableCell, TableHead, TableRow } from '@mui/material';
import { UserPosition } from './types';
import SortIcon from './SortIcon';

interface TableHeaderProps {
  onSort: (key: keyof UserPosition) => void;
  sortConfig: {
    key: keyof UserPosition | null;
    direction: 'asc' | 'desc';
  };
}

const TableHeader = ({ onSort, sortConfig }: TableHeaderProps) => {
  const headers: { key: keyof UserPosition; label: string }[] = [
    { key: 'lastActivity', label: 'Latest Activity' },
    { key: 'address', label: 'User' },
    { key: 'dusdSupplied', label: 'dUSD Supplied' },
    { key: 'dusdDebt', label: 'dUSD Debt' },
    { key: 'collateralSupplied', label: 'Collateral' },
    { key: 'collateralValue', label: 'Collateral Value' },
    { key: 'currentLTV', label: 'Current LTV' },
    { key: 'healthFactor', label: 'Health Factor' }
  ];

  return (
    <TableHead>
      <TableRow>
        {headers.map(({ key, label }) => (
          <TableCell 
            key={key} 
            sx={{ color: 'white' }}
          >
            <div 
              className="flex items-center gap-1 cursor-pointer" 
              onClick={() => onSort(key)}
            >
              {label}
              <SortIcon 
                columnKey={key}
                currentSortKey={sortConfig.key}
                sortDirection={sortConfig.direction}
              />
            </div>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;