import React, { useContext } from "react";
import classes from "./Project.module.css";
import { ThemeContext } from "../store/Context";

export function Project() {
  const { themeMode } = useContext(ThemeContext);
  let dark = themeMode === "dark" ? classes.dark : "";

  return (
    <div className={`${classes.project_wrap} ${dark}`}>
      <h2>Project</h2>
    </div>
  );
}
