import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import Index from "./pages/Index";
import Collaterals from "./pages/Collaterals";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => {
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error" | "info" | "warning";
  }>({
    open: false,
    message: "",
    severity: "info",
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
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
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </div>
    </QueryClientProvider>
  );
};

export default App;