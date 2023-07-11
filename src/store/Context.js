import React, { useCallback, useState } from "react";

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  // const LocalTheme = window.localStorage.getItem("theme") || "basic";
  const [themeMode, setThemeMode] = useState("");
  console.log(themeMode);
  //로컬 스토지에 저장할거임
  const chooseTheme = useCallback(() => {
    if (themeMode === "basic") {
      window.localStorage.setItem("theme", "basic");
    } else {
      window.localStorage.setItem("theme", "dark");
    }
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode, chooseTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
