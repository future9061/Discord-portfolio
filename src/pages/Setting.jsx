import React from "react";
import classes from "./Setting.module.css" 
import Back from "../components/ui/Back";

export function Setting() {
  return <div className={classes.setting_wrap}>
    <Back />
    <div className={classes.setting_inner}>
      <div className={classes.light_wrap}></div>
      <div className={classes.dark_wrap}></div>
    </div>
  </div>;
}
