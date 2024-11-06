import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import Index from "./pages/Index";
import Collaterals from "./pages/Collaterals";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/collaterals" element={<Collaterals />} />
            <Route path="/treasury" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  </QueryClientProvider>
);

export default App;