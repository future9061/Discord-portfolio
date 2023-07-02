import React from "react";

import { BsPlusLg, BsDiscord } from "react-icons/bs";
import { IoCompass } from "react-icons/io5";
import classes from "./SideTab.module.css";
import { CircleIcon } from "./li/Circle";
import { Circle } from "./li/Circle";
import { Link } from "react-router-dom";

function SideTab() {
  return (
    <div className={classes.side_tab}>
      <ul>
        <Link to="/home">
          <CircleIcon
            icon={<BsDiscord />}
            circleStyle={{
              backgroundColor: "#5663F7",
              color: "white",
              fontSize: "30px",
              borderRadius: "25px",
            }}
          />
        </Link>

        <Link to="/about">
          <Circle text={"👩‍💻"} />
        </Link>

        <Link to="/skills">
          <Circle text={"🏹"} circleStyle={{ backgroundColor: "#61DAFB" }} />
        </Link>

        <Link to="/project">
          <Circle text={"📄"} circleStyle={{ backgroundColor: "#FFDF00" }} />
        </Link>

        <Link to="/contact">
          <Circle text={"📞"} circleStyle={{ backgroundColor: "gray" }} />
        </Link>

        <CircleIcon
          icon={<BsPlusLg />}
          circleStyle={{
            backgroundColor: "#313338",
            color: "#23A459",
          }}
        />

        <CircleIcon
          icon={<IoCompass />}
          circleStyle={{
            backgroundColor: "#313338",
            color: "#23A459",
            fontSize: "35px",
          }}
        />
      </ul>
    </div>
  );
}

export default SideTab;
