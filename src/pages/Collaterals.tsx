import CollateralPieChart from "@/components/CollateralPieChart";
import BalanceSheet from "@/components/BalanceSheet";
import NavMenu from "@/components/NavMenu";
import NetworkSelector from "@/components/NetworkSelector";

const Collaterals = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold">dSTATS Dashboard</h1>
            <NavMenu />
          </div>
          <NetworkSelector />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CollateralPieChart />
          <BalanceSheet />
        </div>
      </div>
    </div>
  );
};

export default Collaterals;