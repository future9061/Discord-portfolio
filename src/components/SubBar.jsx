import React, { useContext } from "react";
import classes from "./SubBar.module.css";
import { ThemeContext } from "../store/Context";
import { IoMdSettings } from "react-icons/io";
import BrLi, { SetIcon } from "./li/BrLi";
import { useSelector } from "react-redux";

export default function SubBar() {
  const { atCircle } = useContext(ThemeContext);
  const theme = useSelector((state) => state.themSlice);
  let dark = theme === "dark" ? classes.dark : "";

  return (
    <div className={`${classes.sub_bar_wrap} ${dark}`}>
      <ul>
        <BrLi text="Home" action={atCircle} />

        <BrLi text="About" action={atCircle} />

        <BrLi text="Skills" action={atCircle} />

        <BrLi text="Project" action={atCircle} />

        <BrLi text="Contact" action={atCircle} />

        <SetIcon
          icon={<IoMdSettings></IoMdSettings>}
          action={atCircle}
          text="Setting"
        />
      </ul>
    </div>
  );
}
