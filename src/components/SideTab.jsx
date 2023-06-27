import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { BsPlusLg } from "react-icons/bs";
import { IoCompass } from "react-icons/io5";
import classes from "./SideTab.module.css";

function SideTab() {
  return (
    <div className={classes.side_tab}>
      <ul>
        <li>
          <FontAwesomeIcon icon={faDiscord} style={{ color: "white" }} />
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/img/`} />
        </li>
        <li></li>
        <li></li>
        <li></li>

        <li className={classes.plus_icon_wrap}>
          <BsPlusLg></BsPlusLg>
        </li>
        <li>
          <IoCompass></IoCompass>
        </li>
      </ul>
    </div>
  );
}

export default SideTab;
