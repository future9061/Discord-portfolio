import React from "react";
import classes from "./SlideMenu.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import MeLi from "./li/MeLi";

function SlideMenu() {
  return (
    <div className={classes.slide_wrap}>
      <div className={classes.slide_inner}>
        <h2>
          <AiOutlineCloseCircle />
        </h2>
        <ul>
          <li>
            <p>Log</p>
          </li>
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
