import React, { useContext, useEffect, useState } from "react";
import classes from "./Skills.module.css";
import Back from "../components/ui/Back";
import { SkillsBox, SkillsModal } from "../components/li/SkillsBox";
import { ThemeContext } from "../store/Context";

export function Skills() {
  const { themeMode } = useContext(ThemeContext);
  let dark = themeMode === "dark" ? classes.dark : "";
  const talk = "MouseOn으로 해당 스킬의 구체적인 역량을 확인할 수 있어요!";
  const [talkWrap, settalkWrap] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      settalkWrap(talkWrap + talk[count]);
      setCount(count + 1);
    }, 50);
    if (count === talk.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return (
    <div className={`${classes.skills_wrap} ${dark}`}>
      <Back />
      <div className={classes.skills_inner}>
        <h2>Skills 🚀</h2>
        <div className={classes.inner_wrap}>
          <div className="language">
            <h2>Language</h2>
            <ul>
              <SkillsBox img="javascript-icon.png" alt="Javascipt" />
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
              <SkillsBox img="bootstrap-icon.png" alt="bootstrap-icon" />
              <SkillsBox img="tailwind-icon.png" alt="tailwind-icon" />
              <SkillsBox img="firebase-icon.png" alt="firebase-icon" />
            </ul>
          </div>
          <div className="Tools">
            <h2>Tools</h2>
            <ul>
              <SkillsBox
                img="git-icon.png"
                alt="git-icon"
                ImgStyle={{ transform: "scale(1.15)" }}
              />
              <SkillsBox img="github-icon.png" alt="github-icon" />
              <SkillsBox
                img="figma-icon.png"
                alt="figma-icon"
                ImgStyle={{ transform: "scale(1.2)" }}
              />

              <SkillsBox img="photoshop-icon.png" alt="photoshop-icon" />

              <SkillsBox img="netlify-icon.png" alt="netlify-icon" />
            </ul>
          </div>
          <SkillsModal />
        </div>

        <div className={classes.blue}>
          <p>{talkWrap}</p>
          <img src={process.env.PUBLIC_URL + "/img/logo(img).png"} alt="wink" />
        </div>
      </div>
    </div>
  );
}
