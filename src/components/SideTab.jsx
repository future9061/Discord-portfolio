import React, { useContext, useState } from "react";

import classes from "./SideTab.module.css";
import { Circle, CircleIcon, CirclePlus } from "./li/Circle";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { FcSettings } from "react-icons/fc";
import { ThemeContext } from "../store/Context";

function SideTab() {
  const { themeMode } = useContext(ThemeContext);
  let dark = themeMode === "dark" ? classes.dark : "";
  const { atCircle, setAtcircle } = useContext(ThemeContext);

  return (
    <div className={`${classes.side_tab} ${dark}`}>
      <ul>
        <Link to="/home">
          <Circle
            onClick={() => {
              setAtcircle("Home");
            }}
            action={atCircle}
            src={`${process.env.PUBLIC_URL}/img/logo white img.png`}
            text="Home"
            name="first"
            imgStyle={{ transform: "scale(1.4)" }}
          />
        </Link>

        <div></div>

        <Link to="/about">
          <Circle
            src="/img/about img.png"
            text="About"
            onClick={() => {
              setAtcircle("About");
            }}
            action={atCircle}
          />
        </Link>

        <Link to="/skills">
          <Circle
            src="/img/skills img.png"
            text="Skills"
            onClick={() => {
              setAtcircle("Skills");
            }}
            action={atCircle}
          />
        </Link>

        <Link to="/project">
          <Circle
            src="/img/project.png"
            text="Project"
            onClick={() => {
              setAtcircle("Project");
            }}
            action={atCircle}
          />
        </Link>

        <Link to="/contact">
          <Circle
            src="/img/connect img.png"
            text="Contact"
            onClick={() => {
              setAtcircle("Contact");
            }}
            action={atCircle}
          />
        </Link>

        <Link to="/setting">
          <CircleIcon
            text="Setting"
            onClick={() => {
              setAtcircle("Setting");
            }}
            action={atCircle}
            icon={<FcSettings />}
            iconStyle={{
              fontSize: "40px",
              transform: "translateY(8px)",
            }}
          />
        </Link>

        <CirclePlus
          icon={<AiOutlinePlus />}
          iconStyle={{
            fontSize: "40px",
            transform: "translateY(8px)",
          }}
        />
      </ul>
    </div>
  );
}

export default SideTab;
