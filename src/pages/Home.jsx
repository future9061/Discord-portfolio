import React, { useState, useEffect, useContext } from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { pathMove } from "../store/store";

export function Home() {
  const txt = "Welcome to Mirae World!";
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

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

  const theme = useSelector((state) => state.themSlice);
  let dark = theme === "dark" ? classes.dark : "";

  const setBtn = (e) => {
    const value = e.target.textContent;
    dispatch(pathMove(value));
  };

  return (
    <div className={`${classes.home_wrap} ${dark}`}>
      <div className={classes.home_inner}>
        <div className={classes.img_wrap}>
          {theme !== "dark" ? (
            <img src={`${process.env.PUBLIC_URL}/img/bg-img.webp`} />
          ) : (
            <img src={`${process.env.PUBLIC_URL}/img/dark-bg-img.webp`} />
          )}
        </div>
        <div className={classes.text_wrap}>
          <p>{text}</p>
          <div className={classes.blink}></div>
        </div>
        <div className={classes.btn_wrap}>
          <Link to="/about">
            <button>Start</button>
          </Link>
          <Link
            to="/setting"
            onClick={(e) => {
              setBtn(e);
            }}
          >
            <button>Setting</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
