import React from "react";
import classes from "./Content.module.css";

export default function Content() {
  return (
    <div className={classes.Content_wrap}>
      <img src={`${process.env.PUBLIC_URL}/img/bg-img2.png`} />
      <p>상단이나 좌측 맨 끝 메뉴를 클릭해주세요!</p>
    </div>
  );
}
