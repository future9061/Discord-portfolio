import React, { useContext } from "react";
import classes from "./Setting.module.css";
import Back from "../components/ui/Back";
import { ThemeContext } from "../store/Context";

export function Setting() {
  const { themeMode, setThemeMode } = useContext(ThemeContext);
  let dark = themeMode === "dark" ? classes.dark : "";
  return (
    <div className={`${classes.setting_wrap} ${dark}`}>
      <Back />
      <div className={classes.setting_inner}>
        <h2>⚙Theme Settings</h2>
        <div>
          <div className={classes.basic_mode}>
            <div className={classes.img_wrap}>
              <img />
            </div>
            <button onClick={() => setThemeMode("basic")}>Basic</button>
          </div>
          <div className={classes.dark_mode}>
            <div className={classes.img_wrap}>
              <img />
            </div>
            <button onClick={() => setThemeMode("dark")}>Blue</button>
          </div>
        </div>
      </div>
    </div>
  );
}
