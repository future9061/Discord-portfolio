import React, { useContext } from "react";
import classes from "./Project.module.css";
import { ThemeContext } from "../store/Context";
import Back from "../components/ui/Back";
import ProjectItem from "../components/ProjectItem";

export function Project() {
  const { themeMode, pathName, setProjectBtn } = useContext(ThemeContext);
  let dark = themeMode === "dark" ? classes.dark : "";

  return (
    <div className={`${classes.project_wrap} ${dark}`}>
      <Back />
      <div className={classes.project_inner}>
        <h2>💻Project</h2>
        <div className={classes.project_content}>
          <ProjectItem />
        </div>
      </div>
    </div>
  );
}
