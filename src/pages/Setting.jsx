import React, { useContext, useEffect } from "react";
import classes from "./Setting.module.css";
import Back from "../components/ui/Back";
import { ThemeContext } from "../store/Context";

export function Setting() {
 const thema =
  let dark = themeMode === "dark" ? classes.dark : "";

  useEffect(() => {
    choiceThema();
  }, [choiceThema]);

  console.log("테마모드", themeMode);
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
                  choiceThema();
                }}
                src={`${process.env.PUBLIC_URL}/img/basic-mode.png`}
                alt="basic-mode"
              />
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setThemeMode("basic");
                choiceThema();
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
                  choiceThema();
                }}
                src={`${process.env.PUBLIC_URL}/img/blue-mode.png`}
                alt="blue-mode"
              />
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setThemeMode("dark");
                choiceThema();
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
