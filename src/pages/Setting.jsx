import React, { useContext, useEffect } from "react";
import classes from "./Setting.module.css";
import Back from "../components/ui/Back";
import { ThemeContext } from "../store/Context";

export function Setting() {
  const { themeMode, setThemeMode, chooseTheme } = useContext(ThemeContext);
  let dark = themeMode === "dark" ? classes.dark : "";

  useEffect(() => {
    chooseTheme();
  }, [themeMode, chooseTheme]);

  return (
    <div className={`${classes.setting_wrap} ${dark}`}>
      <Back />
      <div className={classes.setting_inner}>
        <h2>⚙Theme Settings</h2>
        <div>
          <div className={classes.basic_mode}>
            <div className={classes.img_wrap}>
              <img
                onClick={(e) => {
                  e.stopPropagation();
                  setThemeMode("basic");
                }}
                src={`${process.env.PUBLIC_URL}/img/basic-mode.png`}
                alt="basic-mode"
              />
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setThemeMode("basic");
              }}
            >
              Basic
            </button>
          </div>
          <div className={classes.dark_mode}>
            <div className={classes.img_wrap}>
              <img
                onClick={(e) => {
                  e.stopPropagation();
                  setThemeMode("dark");
                }}
                src={`${process.env.PUBLIC_URL}/img/blue-mode.png`}
                alt="blue-mode"
              />
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setThemeMode("dark");
              }}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
