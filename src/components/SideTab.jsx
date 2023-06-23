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
          <a href="">
            <FontAwesomeIcon icon={faDiscord} style={{ color: "white" }} />
          </a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>

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
