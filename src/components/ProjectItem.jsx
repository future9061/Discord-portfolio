import React from "react";
import classes from "../pages/Project.module.css";
import { MdOutlineMonitor } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

export default function ProjectItem(props) {
  return (
    <div className={classes.item_wrap}>
      <span style={{ backgroundColor: props.barColor }}></span>

      <div className={classes.item_inner}>
        <div className={classes.img_wrap}>
          <img src={`${process.env.PUBLIC_URL}/img/${props.src}`} alt="" />
        </div>
        <h1>{props.title}</h1>

        <div className={classes.text_wrap}>
          리액트로 쇼핑몰을 만들어봤습니다. 반응형은 이렇게 했고 오늘 점심으로는
          사라다 빵을 먹었습니다 암냠냠
        </div>
        <div className={classes.keyowrd_wrap}>
          <div>{props.keyword}</div>
          <div>{props.subkeyword}</div>
        </div>
        <div className={classes.link_wrap}>
          <p>
            <AiFillGithub />
          </p>
          <p>
            <MdOutlineMonitor />
          </p>
        </div>
      </div>
    </div>
  );
}
