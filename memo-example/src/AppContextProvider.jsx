import { AppContext } from "./AppContext";

export function AppContextProvider({ children, value }) {
  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  );
}