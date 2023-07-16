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
        <Link to="/Home">
          <BrLi text="Home" action={atCircle} />
        </Link>

        <Link to="/About">
          <BrLi text="About" action={atCircle} />
        </Link>
        <Link to="/Skills">
          <BrLi text="Skills" action={atCircle} />
        </Link>
        <Link to="/Project">
          <BrLi text="Project" action={atCircle} />
        </Link>

        <Link to="/Contact">
          <BrLi text="Contact" action={atCircle} />
        </Link>

        <Link to="/Setting">
          <SetIcon
            icon=<IoMdSettings></IoMdSettings>
            action={atCircle}
            text="Setting"
          />
        </Link>
      </ul>
    </div>
  );
}
