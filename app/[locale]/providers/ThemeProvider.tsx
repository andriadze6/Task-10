
import { createContext, ReactNode } from "react";


interface ThemeContextType {
  theme: string;
}


export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


interface ThemeProviderProps {
  children: ReactNode;
}


export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme: "" }}>
      {children}
    </ThemeContext.Provider>
  );
};