import React, { useCallback, useState } from "react";

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const LocalTheme = window.localStorage.getItem("theme") || "basic";
  const [themeMode, setThemeMode] = useState(LocalTheme);
  const [atCircle, setAtcircle] = useState("");

  const chooseTheme = useCallback(() => {
    if (themeMode === "basic") {
      window.localStorage.setItem("theme", "basic");
    } else {
      window.localStorage.setItem("theme", "dark");
    }
    console.log("chooseTheme", themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider
      value={{ themeMode, setThemeMode, chooseTheme, atCircle, setAtcircle }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
