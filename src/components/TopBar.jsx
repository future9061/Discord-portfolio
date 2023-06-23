import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import classes from "./TopBar.module.css";

function TopBar() {
  return (
    <div className={classes.topbar_wrap}>
      <div className={classes.logo}>
        <img src={`${process.env.PUBLIC_URL}/img/logo(text).png`}></img>
      </div>
      <div className={classes.topwrap_icons}>
        <ul>
          <li></li>
          <li></li>
          <li>
            <FontAwesomeIcon icon={faXmark} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopBar;
