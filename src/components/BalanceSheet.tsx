import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BalanceSheet = () => {
  const assets = [
    { name: 'sFRAX', value: 8500000 },
    { name: 'sDAI', value: 4200000 },
    { name: 'sUSDe', value: 2534567 },
  ];

  const liabilities = [
    { name: 'Circulating dUSD', value: 15234567 },
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const totalAssets = assets.reduce((sum, item) => sum + item.value, 0);
  const totalLiabilities = liabilities.reduce((sum, item) => sum + item.value, 0);
  const equity = totalAssets - totalLiabilities;

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>dUSD Balance Sheet</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Assets</h3>
            <div className="space-y-2">
              {assets.map((item) => (
                <div key={item.name} className="flex justify-between">
                  <span className="text-gray-200">{item.name}</span>
                  <span className="font-mono">{formatCurrency(item.value)}</span>
                </div>
              ))}
              <div className="border-t border-gray-700 pt-2 mt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total Assets</span>
                  <span className="font-mono">{formatCurrency(totalAssets)}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liabilities & Equity</h3>
            <div className="space-y-2">
              {liabilities.map((item) => (
                <div key={item.name} className="flex justify-between">
                  <span className="text-gray-200">{item.name}</span>
                  <span className="font-mono">{formatCurrency(item.value)}</span>
                </div>
              ))}
              <div className="flex justify-between">
                <span className="text-gray-200">Protocol Equity</span>
                <span className="font-mono">{formatCurrency(equity)}</span>
              </div>
              <div className="border-t border-gray-700 pt-2 mt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total L&E</span>
                  <span className="font-mono">{formatCurrency(totalAssets)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BalanceSheet;