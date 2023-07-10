import React, { useState, useEffect } from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

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
  return (
    <div className={classes.home_wrap}>
      <div className={classes.home_inner}>
        <div className={classes.img_wrap}>
          <img src={`${process.env.PUBLIC_URL}/img/bg-img.png`} />
        </div>
        <div className={classes.text_wrap}>
          <p>{text}</p>

          <div className={classes.blink}></div>
        </div>
        <div className={classes.btn_wrap}>
          <Link to="/about">
            <button>Start</button>
          </Link>
          <Link to="/setting">
            <button>Setting</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
