import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./SubBar.module.css";
import { ThemeContext } from "../store/Context";

export default function SubBar() {
  const { themeMode } = useContext(ThemeContext);
  let dark = themeMode === "dark" ? classes.dark : "";

  return (
    <div className={`${classes.sub_bar_wrap} ${dark}`}>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/skills">
          <li>Skills</li>
        </Link>
        <Link to="/project">
          <li>Project</li>
        </Link>
        <Link to="/contact">
          <li className={classes.green}>Contact</li>
        </Link>
      </ul>
    </div>
  );
}
