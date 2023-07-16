import React, { useContext } from "react";
import classes from "./About.module.css";
import Back from "../components/ui/Back";
import { ThemeContext } from "../store/Context";

export function About() {
  const { themeMode } = useContext(ThemeContext);

  let dark = themeMode === "dark" ? classes.dark : "";
  return (
    <div className={`${classes.about_wrap} ${dark}`}>
      <Back />
      <div className={classes.about_inner}>
        <h2>About me🌟</h2>
        <h3>💕미래의 portfolio에 오신것을 환영합니다!</h3>

        <div className={classes.mirae_wrap}>
          <div className={classes.img_wrap}>
            <img
              src={`${process.env.PUBLIC_URL}/img/mirae.png`}
              className={classes.img}
            />
          </div>
          <b>MiRae Lee</b>
          <p>Front-end Developer</p>
        </div>

        <div className={classes.ment}>
          <b>고통 끝에 오는 희열을 즐기는 신입 개발자😏</b>
          <p>안녕하세요! 프론트엔드 개발자 이미래입니다.</p>
        </div>
      </div>
    </div>
  );
}
