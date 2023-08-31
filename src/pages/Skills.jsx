import React, { useEffect } from "react";
import classes from "./Skills.module.css";
import Back from "../components/ui/Back";
import { SkillsBox } from "../components/li/SkillsBox";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import SkillData from "../store/SkillData";
import { changeTalk } from "../store/store";

export function Skills() {
  const theme = useSelector((state) => state.themSlice);
  const chatbot = useSelector((state) => state.chatBotSlice);
  let dark = theme === "dark" ? classes.dark : "";
  const dispatch = useDispatch();
  const talk = [...chatbot];
  const data = [...SkillData];
  const [talkCount, setTalkCount] = useState(0);
  const [talkWrap, settalkWrap] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTalkCount((prevTalkCount) => prevTalkCount + 1);
      settalkWrap(talkWrap + talk[talkCount]);
    }, 40);

    if (talkCount >= talk.length) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [talk, talkWrap]);

  useEffect(() => {
    dispatch(changeTalk(data[0].content));
  }, []);

  return (
    <div className={`${classes.skills_wrap} ${dark}`}>
      <Back />
      <div className={classes.skills_inner}>
        <h2>Skills 🚀</h2>
        <div className={classes.inner_wrap}>
          <div className="language">
            <h2>Language</h2>
            <ul>
              <SkillsBox
                img="javascript-icon.webp"
                alt="Javascript"
                setTalkCount={setTalkCount}
                settalkWrap={settalkWrap}
              />
              <SkillsBox
                img="html-icon.webp"
                alt="HTML"
                ImgStyle={{ transform: "scale(1.07,1)" }}
                setTalkCount={setTalkCount}
                settalkWrap={settalkWrap}
              />
              <SkillsBox
                img="css-icon.webp"
                ImgStyle={{ transform: "scale(1.2,1.1)" }}
                alt="CSS"
                setTalkCount={setTalkCount}
                settalkWrap={settalkWrap}
              />
            </ul>
          </div>

          <div className="framework">
            <h2>Framework</h2>
            <ul>
              <SkillsBox
                img="react-icon.webp"
                alt="React"
                setTalkCount={setTalkCount}
                settalkWrap={settalkWrap}
              />
              <SkillsBox
                img="vue-l.webp"
                alt="Vue"
                ImgStyle={{ transform: "scale(1.2,1.3)" }}
                setTalkCount={setTalkCount}
                settalkWrap={settalkWrap}
              />
            </ul>
          </div>

          <div className="library">
            <h2>Library</h2>
            <ul>
              <SkillsBox
                img="bootstrap-icon.webp"
                alt="Bootstrap"
                setTalkCount={setTalkCount}
                settalkWrap={settalkWrap}
              />
              <SkillsBox
                img="tailwind-icon.webp"
                alt="Tailwind"
                setTalkCount={setTalkCount}
                settalkWrap={settalkWrap}
              />
              <SkillsBox
                img="firebase-icon.webp"
                alt="Firebase"
                setTalkCount={setTalkCount}
                settalkWrap={settalkWrap}
              />
            </ul>
          </div>
          <div className="Tools">
            <h2>Tools</h2>
            <ul>
              <SkillsBox
                img="git-icon.png"
                alt="Git"
                ImgStyle={{ transform: "scale(1.15)" }}
                setTalkCount={setTalkCount}
                settalkWrap={settalkWrap}
              />
              <SkillsBox
                img="github-icon.webp"
                alt="GitHub"
                setTalkCount={setTalkCount}
                settalkWrap={settalkWrap}
              />
              <SkillsBox
                img="figma-icon.webp"
                alt="Figma"
                ImgStyle={{ transform: "scale(1.2)" }}
                setTalkCount={setTalkCount}
                settalkWrap={settalkWrap}
              />

              <SkillsBox
                img="photoshop-icon.webp"
                alt="Photoshop"
                setTalkCount={setTalkCount}
                settalkWrap={settalkWrap}
              />

              <SkillsBox
                img="netlify-icon.webp"
                alt="Netlify"
                setTalkCount={setTalkCount}
                settalkWrap={settalkWrap}
              />
            </ul>
          </div>
        </div>

        <div className={classes.blue}>
          <p>{talkWrap}</p>
          <img
            src={process.env.PUBLIC_URL + "/img/logo(img).webp"}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}
