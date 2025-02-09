"use client"
import { createContext, useContext, useState } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

interface ThemeContextType {
  themeColor: string;
  setThemeColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [themeColor, setThemeColor] = useState("#FFD700");

  const theme = createTheme({
    palette: {
      primary: { main: themeColor },
    },
  });

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeContext must be used within ThemeProviderWrapper");
  return context;
};
