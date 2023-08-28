import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import classes from "./TopBar.module.css";
import { useSelector } from "react-redux";

function TopBar() {
  const theme = useSelector((state) => state.themSlice);
  let dark = theme === "dark" ? classes.dark : "";

  return (
    <div className={`${classes.topbar_wrap} ${dark}`}>
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
