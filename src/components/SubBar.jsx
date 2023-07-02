import React from "react";
import { Link } from "react-router-dom";
import classes from "./SubBar.module.css";
import { RiHome2Fill } from "react-icons/ri";

export default function SubBar() {
  return (
    <div className={classes.sub_bar_wrap}>
      <ul>
        <Link to="/home">
          <li>
            <RiHome2Fill
              style={{ verticalAlign: "middle", marginRight: "5px" }}
            />
            Home
          </li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/skills">
          <li>Skills</li>
        </Link>
        <Link to="/project">
          <li>Project</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}
