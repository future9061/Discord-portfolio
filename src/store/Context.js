import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const LocalTheme = window.localStorage.getItem("theme") || "basic";
  const [themeMode, setThemeMode] = useState(LocalTheme);
  const location = useLocation();
  const navigate = useNavigate();

  

  //  클릭하면 atCircle이 아니라 텍스트에 저장
  //텍스트의 값이 없으면 Home 있으면 클릭한 값

  const [menuTxt, setMenuTxt] = useState("");
  const [atCircle, setAtcircle] = useState("");

  useEffect(() => {
    setAtcircle(menuTxt || "Home");
  }, [menuTxt]);

  const chooseTheme = useCallback(() => {
    if (themeMode === "basic") {
      window.localStorage.setItem("theme", "basic");
    } else {
      window.localStorage.setItem("theme", "dark");
    }
  }, [themeMode]);

    const movePage = useCallback(() => {
    navigate(`/${atCircle}`, { state: { from: location.pathname } });
  }, [atCircle, location.pathname, navigate]);

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        setThemeMode,
        chooseTheme,
        atCircle,
        setAtcircle,
        setMenuTxt,
        movePage
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
