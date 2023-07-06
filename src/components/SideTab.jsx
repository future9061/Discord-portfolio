import React from "react";

import classes from "./SideTab.module.css";
import { Circle, CircleIcon } from "./li/Circle";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdCompass } from "react-icons/io";

function SideTab() {
  function styleChange() {}

  return (
    <div className={classes.side_tab}>
      <ul>
        <Link to="/home">
          <Circle
            onClick={styleChange}
            src={`${process.env.PUBLIC_URL}/img/logo white img.png`}
            circleStyle={{
              backgroundColor: " #5865F2",
            }}
            imgStyle={{ width: "40px", transform: "translateY(5px)" }}
            name="firstCircle"
            text="Home"
          />
        </Link>

        <div></div>

        <Link to="/about">
          <Circle src="/img/about img.png" text="About" />
        </Link>

        <Link to="/skills">
          <Circle src="/img/skills img.png" text="Skills" />
        </Link>

        <Link to="/project">
          <Circle src="/img/project.png" text="Project" />
        </Link>

        <Link to="/contact">
          <Circle src="/img/connect img.png" text="connect" />
        </Link>

        <CircleIcon
          icon={<AiOutlinePlus />}
          iconStyle={{
            fontSize: "40px",
            transform: "translateY(8px)",
          }}
        />

        <CircleIcon
          icon={<IoMdCompass />}
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
