import React from "react";
import classes from './About.module.css'
import Back from "../components/ui/Back";

export function About() {
  return (
    <div>
      <Back />
      <div className={classes.about_inner}>
      <div className={classes.img_wrap}>
        <img />
      </div>
      </div>
    </div>
  );
}
