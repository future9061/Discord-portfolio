import React from "react";
import classes from "./contact.module.css";
import Back from "../components/ui/Back";

export function Contact() {
  return (
    <div className={classes.contact_wrap}>
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
                {/* <span>
                  <img
                    src={`${process.env.PUBLIC_URL}img/email.png`}
                    alt="email"
                  />
                </span> */}
                416homin@naver.com
              </li>
              <li>
                <span></span>
                010-7688-2981
              </li>
              <li>
                <span></span>
                https://github.com/future9061
              </li>
              <li>
                <span></span>
                Songpa-gu, seoul
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
