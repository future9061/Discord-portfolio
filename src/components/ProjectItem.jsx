import React, { useContext, useEffect } from "react";
import classes from "../pages/Project.module.css";
import { MdOutlineMonitor } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { BiSolidLabel } from "react-icons/bi";
import copyData from "../store/Project";
import { ThemeContext } from "../store/Context";

export default function ProjectItem() {
  const { projectBtn, setProjectBtn, pathName, setMenuTxt } =
    useContext(ThemeContext);

  /*page가 project가 아니라면  projectBtn을 초기화 시켜서 모든 item 보이게*/

  return copyData.map((elem, index) => {
    return (
      <div
        key={index}
        className={
          projectBtn !== elem.keyword &&
          projectBtn !== "All" &&
          projectBtn !== ""
            ? classes.hide
            : ""
        }
      >
        <div className={classes.label} style={{ color: elem.color }}>
          <BiSolidLabel />
        </div>

        <div className={classes.item_inner}>
          <div>
            <h1>{elem.title}</h1>
            <div className={classes.img_wrap}>
              <img
                src={`${process.env.PUBLIC_URL}/img/${elem.src}`}
                alt={elem.src}
              />
            </div>
          </div>

          <div>
            <div className={classes.text_wrap}>{elem.content}</div>
            <div className={classes.keyowrd_wrap}>
              <div
                style={{
                  border: `2px solid ${elem.color}`,
                  color: `${elem.color}`,
                }}
              >
                <span style={{ color: elem.color }}>{elem.icon}</span>
                <p>{elem.keyword}</p>
              </div>
              <div
                style={{
                  border: `2px solid ${elem.secondColor}`,
                  color: `${elem.secondColor}`,
                }}
              >
                <span style={{ color: elem.secondColor }}>
                  {elem.secondIcon}
                </span>
                {elem.secondkeyword}
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
  });
}
