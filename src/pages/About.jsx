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

        <div className={classes.ment_wrap}>
          <div className={classes.ment}>
            <b>노력 끝에 오는 성취감을 즐기는 신입 개발자😏</b>
            <p>
              안녕하세요! 프론트엔드 개발자 이미래입니다.
              <br /> 개발자에 목표를 갖은 이후로 취미 생활까지 오로지
              코딩이였습니다. <br />
              프로젝트를 거듭날 수록 눈이 트이는 느낌, 어려웠던 로직이 어렵지
              않게 느껴지는 과정이 저에게 즐거움입니다. 코딩을 공부할수록
              개발자의 길에 더욱 확신을 갖게 되었고, 매일 한 계단씩 올라 미래의
              유능한 개발자
              <b>이미래</b>를 기대하고 있습니다.😎
            </p>
          </div>
          <div className={classes.ment}>
            <b>중요한 건 근본! root.🌳</b>
            <p>
              항상 왜? 질문을 던지는 호기심 많은 성격입니다.
              <br /> 덕분에 원리를 알아가며 이해를 바탕으로 한 기술을 쌓아갈 수
              있었습니다. <br />
              이것은 응용과 문제 해결 과정에 많은 도움이 되었고, 앞으로 능동적인
              답을 찾아 가는 것에도 원동력이 될 것입니다.
            </p>
          </div>

          <div className={classes.ment}>
            <b>"오늘은 흘러가는 것이 아닌 채워가는 것"</b>
            <p>
              스터디 플래너 표지에 적혀있던 문구입니다. 휘황찬란한 명언보다
              와닿는 말이며
              <br /> 코딩 공부에 큰 밑거름이 되기도 했습니다. 오늘 성공하지 못한
              로직을 내일 성공하고, 그렇게 하루를 쌓으면서 발전해나가는 자신을
              보며 코딩을 즐기게 되었습니다.
              <br /> 어제보다 더 나은 내일의 나를 바라보며 하루를 허투로 쓰지
              않는 멋진 개발자가 될 것입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
