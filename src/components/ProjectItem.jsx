import React, { useContext, useEffect } from "react";
import classes from "../pages/Project.module.css";
import { MdOutlineMonitor } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { BiSolidLabel } from "react-icons/bi";
import copyData from "../store/Project";
import { useSelector } from "react-redux";

export default function ProjectItem() {
  const btnState = useSelector((state) => state.projectBtn);

  return copyData.map((elem, index) => {
    return (
      <div
        key={index}
        className={
          btnState !== elem.keyword && btnState !== "All" && btnState !== ""
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
              <div onClick={() => window.open(`${elem.git}`)}>
                <span>
                  <AiFillGithub />
                </span>
                <p>Code</p>
              </div>
              <div onClick={() => window.open(`${elem.demo}`)}>
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
