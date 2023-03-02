import { ReactNode, createContext } from "react";

export const OrderContext = createContext({});

interface OrderProviderProps {
  children: ReactNode;
}

export function OrderProvider({ children }: OrderProviderProps) {
  return <OrderContext.Provider value={{}}>{children}</OrderContext.Provider>;
}
