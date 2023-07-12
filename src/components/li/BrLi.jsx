import React from "react";
import classes from "../SubBar.module.css";

export default function BrLi({
  icon,
  iconStyle,
  text,
  bgStyle,
  onClick,
  action,
}) {
  return (
    <li
      style={bgStyle}
      onClick={onClick}
      className={`${action === text ? classes.clickStyle : ""} ${
        text === "Contact" ? classes.green : ""
      } `}
    >
      <div style={iconStyle}>{icon}</div>
      <p>{text}</p>
    </li>
  );
}
