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
  const { atCircle } = useContext(ThemeContext);

  return (
    <div className={`${classes.side_tab} ${dark}`}>
      <ul>
        <Link to="/home">
          <Circle
            action={atCircle}
            src={`${process.env.PUBLIC_URL}/img/logo white img.png`}
            text="Home"
            name="first"
          />
        </Link>

        <div className={classes.line}></div>

        <Link to="/about">
          <Circle src="/img/about img.png" text="About" action={atCircle} />
        </Link>

        <Link to="/skills">
          <Circle src="/img/skills img.png" text="Skills" action={atCircle} />
        </Link>

        <Link to="/project">
          <Circle src="/img/project.png" text="Project" action={atCircle} />
        </Link>

        <Link to="/contact">
          <Circle src="/img/connect img.png" text="Contact" action={atCircle} />
        </Link>

        <Link to="/setting">
          <CircleIcon text="Setting" action={atCircle} icon={<FcSettings />} />
        </Link>

        <CirclePlus icon={<AiOutlinePlus />} />
      </ul>
    </div>
  );
}

export default SideTab;
