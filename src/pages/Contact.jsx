import React from "react";
import classes from "./contact.module.css";
import Back from "../components/ui/Back";
import { PiCopyLight } from "react-icons/pi";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function Contact() {
  const theme = useSelector((state) => state.themSlice);
  let dark = theme === "dark" ? classes.dark : "";

  const handleCopy = () => {
    alert("복사 완료!");
  };
  return (
    <div className={`${classes.contact_wrap} ${dark}`}>
      <Back />
      <div className={classes.contact_inner}>
        <h2>🚩contact Me!</h2>
        <div>
          <div className={classes.img_wrap}>
            <img src={`${process.env.PUBLIC_URL}img/contact.png`} />
          </div>
          <div className={classes.text_wrap}>
            <h2>이미래 / Lee Mi Rae</h2>
            <p>✨소통하고 협력하여 성공을 이뤄내겠습니다.</p>
            <ul>
              <li>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}img/email.png`}
                    alt="email"
                  />
                </div>
                <p>416homin@naver.com</p>
                <CopyToClipboard text="416homin@naver.com" onCopy={handleCopy}>
                  <span>
                    <PiCopyLight />
                  </span>
                </CopyToClipboard>
              </li>
              <li>
                <div>
                  <img
                    style={{ transform: "scaleX(-1)" }}
                    src={`${process.env.PUBLIC_URL}img/call2.png`}
                    alt="call"
                  />
                </div>
                <p>010-7688-2981</p>
                <CopyToClipboard text="010-7688-2981" onCopy={handleCopy}>
                  <span>
                    <PiCopyLight />
                  </span>
                </CopyToClipboard>
              </li>
              <li>
                <div>
                  <img
                    style={{ transform: "scaleX(-1)" }}
                    src={`${process.env.PUBLIC_URL}img/smallgithub3.png`}
                    alt="github"
                  />
                </div>
                <p>https://github.com/future9061</p>
                <Link to="https://github.com/future9061" target="_blank">
                  <span>
                    <LiaExternalLinkAltSolid />
                  </span>{" "}
                </Link>
              </li>

              <li>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}img/location2.png`}
                    alt="location"
                  />
                </div>
                <p>Songpa-gu, seoul</p>
                <span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
