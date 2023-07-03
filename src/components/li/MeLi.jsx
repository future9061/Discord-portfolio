import React from "react";
import classes from "../Category.module.css";

export default function MeLi({ img, text, bgcolor }) {
  return (
    <li>
      <div>
        <div className={classes.hidden} style={bgcolor}>
          <img src={`${process.env.PUBLIC_URL}img/${img}.png`} />
        </div>
        <div className={classes.circle}></div>
      </div>
      <p>{text}</p>
    </li>
  );
}
