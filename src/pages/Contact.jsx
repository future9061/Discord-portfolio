import React, { useContext } from "react";
import classes from "./contact.module.css";
import Back from "../components/ui/Back";
import { ThemeContext } from "../store/Context";

export function Contact() {
  const { themeMode } = useContext(ThemeContext);
  let dark = themeMode === "dark" ? classes.dark : "";
  return (
    <div className={`${classes.contact_wrap} ${dark}`}>
      <Back />
      <div className={classes.contact_inner}>
        <h2>🚩contact Me!</h2>
        <div>
          <div className={classes.img_wrap}>
            <img />
          </div>
          <div className={classes.text_wrap}>
            <h2>이미래 / Lee Mi Rae</h2>
            <p>✨소통하고 협력하여 성공을 이뤄내겠습니다.</p>
            <ul>
              <li>
                <span>
                  <img
                    src={`${process.env.PUBLIC_URL}img/email.png`}
                    alt="email"
                  />
                </span>
                416homin@naver.com
              </li>
              <li>
                <span>
                  <img
                    style={{ transform: "scaleX(-1)" }}
                    src={`${process.env.PUBLIC_URL}img/call2.png`}
                    alt="call"
                  />
                </span>
                010-7688-2981
              </li>
              <li>
                <span>
                  <img
                    src={`${process.env.PUBLIC_URL}img/smallgithub3.png`}
                    alt="github"
                  />
                </span>
                https://github.com/future9061
              </li>
              <li>
                <span>
                  <img
                    src={`${process.env.PUBLIC_URL}img/location2.png`}
                    alt="location"
                  />
                </span>
                Songpa-gu, seoul
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
