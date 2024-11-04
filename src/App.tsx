import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Collaterals from "./pages/Collaterals";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/collaterals" element={<Collaterals />} />
              <Route path="/amo-smo" element={<Navigate to="/" replace />} />
              <Route path="/treasury" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;