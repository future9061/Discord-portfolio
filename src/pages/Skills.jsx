import React from "react";
import classes from "./Skills.module.css";
import Back from "../components/ui/Back";

export function Skills() {
  return (
    <div className={classes.skills_wrap}>
      <Back />
      <div className={classes.skills_inner}>
        <h2>Skills 🚀</h2>
        <div className={classes.inner_wrap}>
          <div className="language">
            <h2>Language</h2>
            <ul>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}img/javascript-icon.png`}
                  alt="javascript-icon"
                />
              </div>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}img/html-icon.png`}
                  alt="html-icon"
                />
              </div>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}img/css-icon.png`}
                  alt="css-icon"
                />
              </div>
            </ul>
          </div>
          <div className="framework">
            <h2>Framework</h2>
            <ul>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}img/react-icon.png`}
                  alt="react-icon"
                />
              </div>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}img/vue 1.png`}
                  alt="vue-icon"
                />
              </div>
            </ul>
          </div>
          <div className="library">
            <h2>Library</h2>
            <ul>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}img/bootstrap-icon.png`}
                  alt="bootstrap-icon"
                />
              </div>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}img/tailwind-icon.png`}
                  alt="tailwind-icon"
                />
              </div>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}img/firebase-icon.png`}
                  alt="firebase-icon"
                />
              </div>
            </ul>
          </div>
          <div className="Tools">
            <h2>Tools</h2>
            <ul>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}img/git-icon.png`}
                  alt="git-icon"
                />
              </div>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}img/github-icon.png`}
                  alt="github-icon"
                />
              </div>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}img/figma-icon.png`}
                  alt="figma-icon"
                />
              </div>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}img/photoshop-icon.png`}
                  alt="photoshop-icon"
                />
              </div>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}img/netlify-icon.png`}
                  alt="netlify-icon"
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
