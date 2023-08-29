import React, { useEffect } from "react";
import classes from "./Skills.module.css";
import Back from "../components/ui/Back";
import { SkillsBox } from "../components/li/SkillsBox";
import { useDispatch, useSelector } from "react-redux";
import skillData from "../store/SkillData";
import { changeTalk } from "../store/store";
import { useState } from "react";

export function Skills() {
  const theme = useSelector((state) => state.themSlice);
  const chatbot = useSelector((state) => state.chatBotSlice);
  let dark = theme === "dark" ? classes.dark : "";
  const chatData = [...skillData];
  const dispatch = useDispatch();

  const talk = [...chatbot];
  const [index, setIndex] = useState(0);
  // console.log(talk);
  useEffect(() => {
    const interval = setInterval(() => {
      if (index <= talk.length) {
        dispatch(changeTalk(talk.slice(0, index + 1)));
        setIndex((pre) => pre + 1);
        console.log(index);
      }
    }, 4000);

    // 이펙트 종료 시 clearInterval
    // if (index > talk.length) {
    //   clearInterval(interval);
    // }
  }, [index, talk, dispatch]);

  // useEffect(() => {
  //   setTalk([...chatbot]);
  //   setIndex(0);
  // }, [chatbot]);

  return (
    <div className={`${classes.skills_wrap} ${dark}`}>
      <Back />
      <div className={classes.skills_inner}>
        <h2>Skills 🚀</h2>
        <div className={classes.inner_wrap}>
          <div className="language">
            <h2>Language</h2>
            <ul>
              <SkillsBox img="javascript-icon.webp" alt="Javascript" />
              <SkillsBox
                img="html-icon.webp"
                alt="HTML"
                ImgStyle={{ transform: "scale(1.07,1)" }}
              />
              <SkillsBox
                img="css-icon.webp"
                ImgStyle={{ transform: "scale(1.2,1.1)" }}
                alt="CSS"
              />
            </ul>
          </div>

          <div className="framework">
            <h2>Framework</h2>
            <ul>
              <SkillsBox img="react-icon.webp" alt="React" />
              <SkillsBox
                img="vue-l.webp"
                alt="Vue"
                ImgStyle={{ transform: "scale(1.2,1.3)" }}
              />
            </ul>
          </div>

          <div className="library">
            <h2>Library</h2>
            <ul>
              <SkillsBox img="bootstrap-icon.webp" alt="Bootstrap" />
              <SkillsBox img="tailwind-icon.webp" alt="Tailwind" />
              <SkillsBox img="firebase-icon.webp" alt="Firebase" />
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
              <SkillsBox img="github-icon.webp" alt="GitHub" />
              <SkillsBox
                img="figma-icon.webp"
                alt="Figma"
                ImgStyle={{ transform: "scale(1.2)" }}
              />

              <SkillsBox img="photoshop-icon.webp" alt="Photoshop" />

              <SkillsBox img="netlify-icon.webp" alt="Netlify" />
            </ul>
          </div>
        </div>

        <div className={classes.blue}>
          <p>{chatbot}</p>
          <img
            src={process.env.PUBLIC_URL + "/img/logo(img).webp"}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}
