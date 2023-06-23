import React from "react";
import { Link } from "react-router-dom";
import classes from "./SubBar.module.css";
import { RiHome2Fill } from "react-icons/ri";

export default function SubBar() {
  return (
    <div className={classes.sub_bar_wrap}>
      <div className={classes.search}>
        <input type="text" placeholder="대화 찾기 또는 시작하기" />
      </div>
      <div className={classes.sub_menu_wrap}>
        <ul>
          <li>
            <a>
              <RiHome2Fill
                style={{ verticalAlign: "middle", marginRight: "5px" }}
              />
              Home
            </a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Skills</a>
          </li>
          <li>
            <a>Project</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
