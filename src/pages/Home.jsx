import React, { useState, useEffect } from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className={classes.home_wrap}>
      <div className={classes.home_inner}>
        <div className={classes.img_wrap}>
          <img src={`${process.env.PUBLIC_URL}/img/bg-img.png`} />
        </div>
        <div className={classes.text_wrap}>
          <p></p>
          <div></div>
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
