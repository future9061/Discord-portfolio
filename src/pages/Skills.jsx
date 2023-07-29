import React, { useContext, useEffect, useState } from "react";
import classes from "./Skills.module.css";
import Back from "../components/ui/Back";
import { SkillsBox } from "../components/li/SkillsBox";
import { ThemeContext } from "../store/Context";

export function Skills() {
  const {
    themeMode,
    talk,
    talkCount,
    setTalkCount,
    select,
    setSelect,
    talkWrap,
    settalkWrap,
    SkillData,
    pathName,
  } = useContext(ThemeContext);
  let dark = themeMode === "dark" ? classes.dark : "";

  useEffect(() => {
    const talkInterval = setInterval(() => {
      setTalkCount((prevTalkCount) => prevTalkCount + 1); // 비동기여서 count를 함수로 부름
      settalkWrap(talkWrap + select[talkCount]);
    }, 40);

    if (talkCount >= talk.length) {
      clearInterval(talkInterval);
    }

    return () => clearInterval(talkInterval);
  }, [talk, talkCount, settalkWrap]);

  /* 초기화 */
  useEffect(() => {
    if (pathName === "Skills") {
      setSelect(() => {
        return SkillData[0].content;
      });
    }
  }, [pathName]);

  return (
    <div className={`${classes.skills_wrap} ${dark}`}>
      <Back />
      <div className={classes.skills_inner}>
        <h2>Skills 🚀</h2>
        <div className={classes.inner_wrap}>
          <div className="language">
            <h2>Language</h2>
            <ul>
              <SkillsBox img="javascript-icon.png" alt="Javascript" />
              <SkillsBox
                img="html-icon.png"
                alt="HTML"
                ImgStyle={{ transform: "scale(1.07,1)" }}
              />
              <SkillsBox
                img="css-icon.png"
                ImgStyle={{ transform: "scale(1.2,1.1)" }}
                alt="CSS"
              />
            </ul>
          </div>

          <div className="framework">
            <h2>Framework</h2>
            <ul>
              <SkillsBox img="react-icon.png" alt="React" />
              <SkillsBox
                img="vue 1.png"
                alt="Vue"
                ImgStyle={{ transform: "scale(1.2,1.3)" }}
              />
            </ul>
          </div>

          <div className="library">
            <h2>Library</h2>
            <ul>
              <SkillsBox img="bootstrap-icon.png" alt="Bootstrap" />
              <SkillsBox img="tailwind-icon.png" alt="Tailwind" />
              <SkillsBox img="firebase-icon.png" alt="Firebase" />
            </ul>
          </div>
          <div className="Tools">
            <h2>Tools</h2>
            <ul>
              <SkillsBox
                img="git-icon.png"
                alt="Git"
                ImgStyle={{ transform: "scale(1.15)" }}
              />
              <SkillsBox img="github-icon.png" alt="GitHub" />
              <SkillsBox
                img="figma-icon.png"
                alt="Figma"
                ImgStyle={{ transform: "scale(1.2)" }}
              />

              <SkillsBox img="photoshop-icon.png" alt="Photoshop" />

              <SkillsBox img="netlify-icon.png" alt="Netlify" />
            </ul>
          </div>
        </div>

        <div className={classes.blue}>
          <p>{talkWrap}</p>
          <img src={process.env.PUBLIC_URL + "/img/logo(img).png"} alt="logo" />
        </div>
      </div>
    </div>
  );
}
