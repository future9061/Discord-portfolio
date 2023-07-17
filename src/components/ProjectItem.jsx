import React from "react";
import classes from "../pages/Project.module.css";
import { MdOutlineMonitor } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { BiSolidLabel } from "react-icons/bi";

export default function ProjectItem(props) {
  return (
    <div className={classes.item_wrap}>
      <div className={classes.label} style={{ color: props.color }}>
        <BiSolidLabel />
      </div>

      <div className={classes.item_inner}>
        <div>
          <h1>{props.title}</h1>
          <div className={classes.img_wrap}>
            <img
              src={`${process.env.PUBLIC_URL}/img/${props.src}`}
              alt={props.src}
            />
          </div>
        </div>

        <div>
          <div className={classes.text_wrap}>
            리액트로 쇼핑몰을 만들어봤습니다. 반응형은 이렇게 했고 오늘
            점심으로는 사라다 빵을 먹었습니다 암냠냠
          </div>
          <div className={classes.keyowrd_wrap}>
            <div
              style={{
                border: `2px solid ${props.color}`,
                color: `${props.color}`,
              }}
            >
              <span style={{ color: props.color }}>{props.icon}</span>
              <p>{props.keyword}</p>
            </div>
            <div
              style={{
                border: `2px solid ${props.secondColor}`,
                color: `${props.secondColor}`,
              }}
            >
              <span style={{ color: props.secondColor }}>
                {props.secondIcon}
              </span>
              {props.secondkeyword}
            </div>
          </div>
          <div className={classes.link_wrap}>
            <div>
              <span>
                <AiFillGithub />
              </span>
              <p>Code</p>
            </div>
            <div>
              <span>
                <MdOutlineMonitor />
              </span>
              <p>Demo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
