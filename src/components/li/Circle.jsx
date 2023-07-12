import React from "react";
import classes from "../SideTab.module.css";

export function Circle({ src, circleStyle, imgStyle, text, onClick, action }) {
  return (
    <li
      className={`${action === text ? classes.fixedStyle : ""}`}
      onClick={onClick}
    >
      <span></span>
      <div style={circleStyle}>
        <img src={src} alt="sidetab" style={imgStyle} />
      </div>
      <p>{text}</p>
    </li>
  );
}

export function CircleIcon({
  circleStyle,
  iconStyle,
  icon,
  text,
  onClick,
  action,
}) {
  return (
    <li
      className={`${action === text ? classes.fixedStyle : ""}`}
      onClick={onClick}
    >
      <span></span>
      <div style={circleStyle} className={classes.icon}>
        <p style={iconStyle}>{icon}</p>
      </div>
      <p>{text}</p>
    </li>
  );
}
export function CirclePlus({ circleStyle, iconStyle, icon }) {
  return (
    <li>
      <div style={circleStyle} className={classes.icon}>
        <p style={iconStyle}>{icon}</p>
      </div>
    </li>
  );
}
