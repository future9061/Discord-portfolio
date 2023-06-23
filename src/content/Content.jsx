import React from "react";
import classes from "./Content.module.css";

export default function Content() {
  return (
    <div className={classes.Content_wrap}>
      <img src={`${process.env.PUBLIC_URL}/img/bg-img.png`} />
    </div>
  );
}
