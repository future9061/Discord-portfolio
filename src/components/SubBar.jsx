import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./SubBar.module.css";
import { ThemeContext } from "../store/Context";
import { IoMdSettings } from "react-icons/io";
import BrLi, { SetIcon } from "./li/BrLi";

export default function SubBar() {
  const { themeMode, atCircle } = useContext(ThemeContext);
  let dark = themeMode === "dark" ? classes.dark : "";

  //window.history.state 이전 경로가 저장되긴 하나 추출이 어렵다고 함
  //useNavigator으로 페이지 이동했으면
  //const location = useLocation();
  //const previousUrl = location.state?.from;
  //console.log(previousUrl);

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
