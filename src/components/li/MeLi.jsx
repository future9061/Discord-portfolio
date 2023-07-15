import React from "react";
import classes from "../Category.module.css";

export default function MeLi({ img, text }) {
  return (
    <li>
      <div>
        <div className={classes.hidden}>
          <img src={`${process.env.PUBLIC_URL}img/${img}.png`} />
        </div>
        <div className={classes.circle}></div>
      </div>
      <p>{text}</p>
    </li>
  );
}

export function IconMeLi({ icon, text }) {
  return (
    <li>
      <span>{icon}</span>
      <p>{text}</p>
    </li>
  );
}
