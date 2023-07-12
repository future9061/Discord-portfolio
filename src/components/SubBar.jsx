import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SubBar.module.css";
import { ThemeContext } from "../store/Context";
import { Circle } from "./li/Circle";

export default function SubBar() {
  const { themeMode } = useContext(ThemeContext);
  let dark = themeMode === "dark" ? classes.dark : "";
  const { atCircle, setAtcircle } = useContext(ThemeContext);
  return (
    <div className={`${classes.sub_bar_wrap} ${dark}`}>
      <ul>
        <Link to="/home">
          <Circle
            text="Home"
            onClick={() => {
              setAtcircle("Home");
            }}
            action={atCircle}
          />
        </Link>
        <Link to="/about">
          <Circle
            text="About"
            onClick={() => {
              setAtcircle("About");
            }}
            action={atCircle}
          />
        </Link>
        <Link to="/skills">
          <Circle
            text="Skills"
            onClick={() => {
              setAtcircle("Skills");
            }}
            action={atCircle}
          />
        </Link>
        <Link to="/project">
          <Circle
            text="Project"
            onClick={() => {
              setAtcircle("Project");
            }}
            action={atCircle}
          />
        </Link>
        <Link to="/contact">
          <Circle
            text="Contact"
            className={classes.green}
            onClick={() => {
              setAtcircle("Contact");
            }}
            action={atCircle}
          />
        </Link>
      </ul>
    </div>
  );
}
