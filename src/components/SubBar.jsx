import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./SubBar.module.css";
import { ThemeContext } from "../store/Context";
import { IoMdSettings } from "react-icons/io";
import BrLi, { SetIcon } from "./li/BrLi";

export default function SubBar() {
  const { themeMode } = useContext(ThemeContext);
  let dark = themeMode === "dark" ? classes.dark : "";
  const { atCircle } = useContext(ThemeContext);
  return (
    <div className={`${classes.sub_bar_wrap} ${dark}`}>
      <ul>
        <BrLi text="Home" action={atCircle} />

        <BrLi text="About" action={atCircle} />

        <BrLi text="Skills" action={atCircle} />

        <BrLi text="Project" action={atCircle} />

        <BrLi text="Contact" action={atCircle} />

        <SetIcon
          icon=<IoMdSettings></IoMdSettings>
          action={atCircle}
          text="Setting"
        />
      </ul>
    </div>
  );
}
