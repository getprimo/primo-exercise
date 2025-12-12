import { createContext, useContext } from "react";


const AppContext = createContext<{
  isAuthenticated: boolean;
}>({
  isAuthenticated: false,
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <AppContext.Provider value={{ isAuthenticated: false }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};