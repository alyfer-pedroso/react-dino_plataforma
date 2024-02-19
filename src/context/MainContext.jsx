import { createContext } from "react";

export const MainContext = createContext();

export function MainProvider({ children }) {
  return <MainContext.Provider value={{}}>{children}</MainContext.Provider>;
}
