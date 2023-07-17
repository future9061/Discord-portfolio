import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./SubBar.module.css";
import { ThemeContext } from "../store/Context";
import { IoMdSettings } from "react-icons/io";
import BrLi, { SetIcon } from "./li/BrLi";

export default function SubBar() {
  const { themeMode, setMenuTxt, menuTxt } = useContext(ThemeContext);
  let dark = themeMode === "dark" ? classes.dark : "";

  //window.history.state 이전 경로가 저장되긴 하나 추출이 어렵다고 함
  //useNavigator으로 페이지 이동했으면
  //const location = useLocation();
  //const previousUrl = location.state?.from;
  //console.log(previousUrl);
  //간단하게 state 속성의 from으로 이전 경로를 가져올 수 있으나 나는 페이지 이동을 다 link로 한상태임..

  return (
    <div className={`${classes.sub_bar_wrap} ${dark}`}>
      <ul>
        <BrLi text="Home" action={menuTxt} />

        <BrLi text="About" action={menuTxt} />

        <BrLi text="Skills" action={menuTxt} />

        <BrLi text="Project" action={menuTxt} />

        <BrLi text="Contact" action={menuTxt} />

        <SetIcon
          icon={<IoMdSettings></IoMdSettings>}
          action={menuTxt}
          text="Setting"
        />
      </ul>
    </div>
  );
}
