import React from "react";
import classes from "./SubBar.module.css";
import { IoMdSettings } from "react-icons/io";
import BrLi, { SetIcon } from "./li/BrLi";
import { useSelector } from "react-redux";

export default function SubBar() {
  const theme = useSelector((state) => state.themSlice);
  let dark = theme === "dark" ? classes.dark : "";
  const state = useSelector((state) => state.pageSlice);

  return (
    <div className={`${classes.sub_bar_wrap} ${dark}`}>
      <ul>
        <BrLi text="Home" />

        <BrLi text="About" />

        <BrLi text="Skills" />

        <BrLi text="Project" />

        <BrLi text="Contact" />

        <SetIcon icon={<IoMdSettings></IoMdSettings>} text="Setting" />
      </ul>
    </div>
  );
}
