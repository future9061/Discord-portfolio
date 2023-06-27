import React from "react";
import classes from "../SideTab.module.css";

export default function Circle(src) {
  return (
    <li className={classes.circle}>
      <img src={`${process.env.PUBLIC_URL}/img/${src}`} />
    </li>
  );
}
