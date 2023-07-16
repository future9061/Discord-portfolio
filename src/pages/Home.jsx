import React, { useState, useEffect, useContext } from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../store/Context";

export function Home() {
  const txt = "Welcome to Mirae World!";
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + txt[count]);
      setCount(count + 1);
    }, 80);
    if (count === txt.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  const { themeMode, setMenuTxt } = useContext(ThemeContext);
  let dark = themeMode === "dark" ? classes.dark : "";

  return (
    <div className={`${classes.home_wrap} ${dark}`}>
      <div className={classes.home_inner}>
        <div className={classes.img_wrap}>
          {themeMode !== "dark" ? (
            <img src={`${process.env.PUBLIC_URL}/img/bg-img.png`} />
          ) : (
            <img src={`${process.env.PUBLIC_URL}/img/dark-bg-img.png`} />
          )}
        </div>
        <div className={classes.text_wrap}>
          <p>{text}</p>
          <div className={classes.blink}></div>
        </div>
        {/* <span className={classes.sub_title}> Front-end Developer </span> */}
        <div className={classes.btn_wrap}>
          <Link to="/about">
            <button
              onClick={() => {
                setMenuTxt("About");
              }}
            >
              Start
            </button>
          </Link>
          <Link to="/setting">
            <button
              onClick={() => {
                setMenuTxt("Setting");
              }}
            >
              Setting
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
