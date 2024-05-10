import React, { createContext, useContext, useState } from "react";

// Define a type for the context value
interface GlobalContextValue {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
}

// Create the context
const GlobalContext = createContext<GlobalContextValue | null>(null);

// Define props type for GlobalContextProvider
interface GlobalContextProviderProps {
  children: React.ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}: GlobalContextProviderProps) => {
  // Define state type
  const [data, setData] = useState<any>(null);

  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to consume the context
export const useGlobalState = (): GlobalContextValue => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "useGlobalState must be used within a GlobalContextProvider"
    );
  }

  return context;
};
