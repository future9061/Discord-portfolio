import React, { useContext, useState } from "react";

import classes from "./SideTab.module.css";
import { Circle, CircleIcon, CirclePlus } from "./li/Circle";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { FcSettings } from "react-icons/fc";
import { ThemeContext } from "../store/Context";

function SideTab() {
  const { themeMode, movePage, atCircle } = useContext(ThemeContext);
  let dark = themeMode === "dark" ? classes.dark : "";

  return (
    <div className={`${classes.side_tab} ${dark}`}>
      <ul>
        <Circle
          action={atCircle}
          src={`${process.env.PUBLIC_URL}/img/logo white img.png`}
          text="Home"
          name="first"
        />

        <div className={classes.line}></div>

        <Circle src="/img/about img.png" text="About" action={atCircle} />

        <Circle src="/img/skills img.png" text="Skills" action={atCircle} />

        <Circle src="/img/project.png" text="Project" action={atCircle} />

        <Circle src="/img/connect img.png" text="Contact" action={atCircle} />

        <CircleIcon text="Setting" action={atCircle} icon={<FcSettings />} />

        <CirclePlus icon={<AiOutlinePlus />} />
      </ul>
    </div>
  );
}

export default SideTab;
