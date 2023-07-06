import React from "react";
import classes from "../SideTab.module.css";

export function Circle({ src, circleStyle, imgStyle, name, text, onClick }) {
  return (
    <li onClick={onClick}>
      <span></span>
      <div className={`${classes[name]}`} style={circleStyle}>
        <img src={src} alt="sidetab" style={imgStyle} />
      </div>
      <p>{text}</p>
    </li>
  );
}

export function CircleIcon({ circleStyle, iconStyle, icon }) {
  return (
    <li>
      <div style={circleStyle} className={classes.icon}>
        <p style={iconStyle}>{icon}</p>
      </div>
    </li>
  );
}
