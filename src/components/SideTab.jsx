import React from "react";
import classes from "./SideTab.module.css";
import { Circle, CircleIcon, CirclePlus } from "./li/Circle";
import { AiOutlinePlus } from "react-icons/ai";
import { FcSettings } from "react-icons/fc";
import { useSelector } from "react-redux";

function SideTab() {
  const theme = useSelector((state) => state.themSlice);
  let dark = theme === "dark" ? classes.dark : "";

  return (
    <div className={`${classes.side_tab} ${dark}`}>
      <ul>
        <Circle
          src={`${process.env.PUBLIC_URL}/img/logowhiteimg.png`}
          text="Home"
          name="first"
        />

        <div className={classes.line}></div>

        <Circle src="/img/about.png" text="About" />

        <Circle src="/img/skills img.png" text="Skills" />

        <Circle src="/img/project.png" text="Project" />

        <Circle src="/img/connect img.png" text="Contact" />

        <CircleIcon text="Setting" icon={<FcSettings />} />

        <CirclePlus icon={<AiOutlinePlus />} />
      </ul>
    </div>
  );
}

export default SideTab;
