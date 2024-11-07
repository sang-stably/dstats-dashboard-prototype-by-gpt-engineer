import { useContext, createContext } from "react";

type ToastContextType = {
  toast: (options: {
    message: string;
    severity?: "success" | "error" | "info" | "warning";
  }) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export default useToast;