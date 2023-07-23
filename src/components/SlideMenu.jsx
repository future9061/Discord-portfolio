import React from "react";
import classes from "./SlideMenu.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import MeLi, { IconMeLi } from "./li/MeLi";
import { BsGithub } from "react-icons/bs";

function SlideMenu() {
  return (
    <div className={classes.slide_wrap}>
      <div className={classes.slide_inner}>
        <ul>
          <h3>Log</h3>
          <li>
            <IconMeLi icon={<BsGithub />} text="GitHub" />
          </li>
          <h3>Direct Menu</h3>
          <li>
            <MeLi text="Javscriript" img="javascript" />
          </li>
          <li>
            <MeLi text="React" img="react" />
          </li>
          <li>
            <MeLi text="Vue" img="vue" />
          </li>
          <li>
            <MeLi text="PWA" img="pwa" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SlideMenu;
