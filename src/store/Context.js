import React from "react";
import { useState } from "react";

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("basic");

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
