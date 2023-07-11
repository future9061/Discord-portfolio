import React, { useCallback, useContext } from "react";
import { useState } from "react";

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const LocalTheme = window.localStorage.getItem("thema") || "";
  const [themeMode, setThemeMode] = useState(LocalTheme);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useThema() {
  const context = useContext(ThemeContext);
  const { themeMode, setThemeMode } = context;

  const choiceThema = useCallback(() => {
    if (themeMode === "basic") {
      window.localStorage.setItem("theme", "basic");
    } else {
      window.localStorage.setItem("theme", "dark");
    }
    console.log("choiceThema", themeMode);
  }, [themeMode]);
  return themeMode, choiceThema;
}

export default { ThemeProvider, useThema };
