import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { BsPlusLg } from "react-icons/bs";
import { IoCompass } from "react-icons/io5";
import classes from "./SideTab.module.css";
import Circle from "./li/Circle";

function SideTab() {
  return (
    <div className={classes.side_tab}>
      <ul>
        <li className={classes.first}>
          <FontAwesomeIcon icon={faDiscord} style={{ color: "white" }} />
        </li>

        <Circle />
        <Circle />
        <Circle />
        <Circle />

        <li className={`${classes.plus_icon_wrap} ${classes.circle}`}>
          <BsPlusLg></BsPlusLg>
        </li>
        <li className={classes.circle}>
          <IoCompass></IoCompass>
        </li>
      </ul>
    </div>
  );
}

export default SideTab;
