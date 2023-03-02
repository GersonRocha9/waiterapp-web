import "react-toastify/dist/ReactToastify.css";

import { AppRoutes } from "./routes/AppRoutes";
import { AuthProvider } from "./contexts";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";

export function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <AppRoutes />
      <ToastContainer position="top-center" />
    </AuthProvider>
  );
}
