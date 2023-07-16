import React, { useContext } from "react";
import classes from "./Project.module.css";
import { ThemeContext } from "../store/Context";
import Back from "../components/ui/Back";
import ProjectItem from "../components/ProjectItem";

export function Project() {
  const { themeMode } = useContext(ThemeContext);
  let dark = themeMode === "dark" ? classes.dark : "";

  return (
    <div className={`${classes.project_wrap} ${dark}`}>
      <Back />
      <div className={classes.project_inner}>
        <h2>💻Project</h2>
        <div className={classes.project_content}>
          <ProjectItem
            title="Adidas"
            keyword="react"
            subkeyword="tailwind"
            src="example.png"
            barColor="#61DAFB"
          />
          <ProjectItem
            title="오늘의 집"
            keyword="javascript"
            subkeyword="tailwind"
            src="example.png"
            barColor="#F7DF1E"
          />
          <ProjectItem
            title="TO DO List"
            keyword="vue"
            subkeyword="tailwind"
            src="example.png"
            barColor="#4FC08D"
          />
          <ProjectItem
            title="Adidas"
            keyword="react"
            subkeyword="tailwind"
            src="example.png"
            barColor="#61DAFB"
          />
        </div>
      </div>
    </div>
  );
}
