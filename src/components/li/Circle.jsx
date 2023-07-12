import React from "react";
import classes from "../SideTab.module.css";

export function Circle({ src, text, onClick, action, imgStyle, name }) {
  return (
    <li
      className={`${action === text ? classes.fixedStyle : ""} ${
        classes[name]
      }`}
      onClick={onClick}
    >
      {action !== text ? <span></span> : <section></section>}
      <div>
        <div>
          <img src={src} alt="sidetab" style={imgStyle} />
        </div>
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
      {action !== text ? (
        <span></span>
      ) : (
        <section className={classes.white}></section>
      )}
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
