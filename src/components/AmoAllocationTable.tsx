import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface AmoAllocation {
  protocol: string;
  pool: string;
  contract: string;
  amoType: string;
  value: number;
  link: string;
}

const amoData: AmoAllocation[] = [
  {
    protocol: "Curve",
    pool: "dUSD-FRAX",
    contract: "0xB17...03f27",
    amoType: "AMM",
    value: 5000000,
    link: "https://curve.fi/#/ethereum/pools/dusd-frax/deposit",
  },
  {
    protocol: "Fraxswap",
    pool: "dUSD-DAI",
    contract: "0xA23...92f18",
    amoType: "AMM",
    value: 3000000,
    link: "https://app.frax.finance/swap",
  },
  {
    protocol: "Velodrome",
    pool: "dUSD-USDC",
    contract: "0xC45...81d39",
    amoType: "AMM",
    value: 2500000,
    link: "https://app.velodrome.finance/liquidity",
  },
  {
    protocol: "Ra Exchange",
    pool: "dUSD-FRAX",
    contract: "0xD67...14e92",
    amoType: "AMM",
    value: 1500000,
    link: "https://ra.xyz",
  },
];

const AmoAllocationTable = () => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Card className="glass-card rounded-xl">
      <CardHeader className="text-center">
        <CardTitle>AMO dUSD Allocation</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Protocol</TableHead>
              <TableHead>Pool</TableHead>
              <TableHead>Contract</TableHead>
              <TableHead>AMO Type</TableHead>
              <TableHead>Value</TableHead>
              <TableHead className="text-right">Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {amoData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.protocol}</TableCell>
                <TableCell>{row.pool}</TableCell>
                <TableCell className="font-mono">{row.contract}</TableCell>
                <TableCell>{row.amoType}</TableCell>
                <TableCell>{formatCurrency(row.value)}</TableCell>
                <TableCell className="text-right">
                  <a
                    href={row.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AmoAllocationTable;