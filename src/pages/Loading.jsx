import React from "react";
import classes from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={classes.loading_wrap}>
      <div className={classes.gif_wrap}>
        <img src={process.env.PUBLIC_URL + "/img/gif.gif"} />
      </div>
      <div className={classes.text_wrap}>
        <h1>Starting</h1>
        <ul className={classes.dott_wrap}>
          <li className={classes.dott1}></li>
          <li className={classes.dott2}></li>
          <li className={classes.dott3}></li>
        </ul>
      </div>
    </div>
  );
}
