import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SubBar.module.css";
import { ThemeContext } from "../store/Context";
import { Circle } from "./li/Circle";
import BrLi from "./li/BrLi";

export default function SubBar() {
  const { themeMode } = useContext(ThemeContext);
  let dark = themeMode === "dark" ? classes.dark : "";
  const { atCircle, setAtcircle } = useContext(ThemeContext);
  return (
    <div className={`${classes.sub_bar_wrap} ${dark}`}>
      <ul>
        <Link to="/home">
          <BrLi
            text="Home"
            onClick={() => {
              setAtcircle("Home");
            }}
            action={atCircle}
          />
        </Link>
        <Link to="/about">
          <BrLi
            text="About"
            onClick={() => {
              setAtcircle("About");
            }}
            action={atCircle}
          />
        </Link>
        <Link to="/skills">
          <BrLi
            text="Skills"
            onClick={() => {
              setAtcircle("Skills");
            }}
            action={atCircle}
          />
        </Link>
        <Link to="/project">
          <BrLi
            text="Project"
            onClick={() => {
              setAtcircle("Project");
            }}
            action={atCircle}
          />
        </Link>
        <Link to="/contact">
          <BrLi
            text="Contact"
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
