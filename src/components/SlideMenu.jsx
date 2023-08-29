import React from "react";
import classes from "./SlideMenu.module.css";
import MeLi, { IconMeLi } from "./li/MeLi";
import { BsGithub } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { slideToggle } from "../store/store";

function SlideMenu() {
  const theme = useSelector((state) => state.themSlice);
  let dark = theme === "dark" ? classes.dark : "";
  const dispatch = useDispatch();
  const btnBoolean = useSelector((state) => state.slideMenuSlice);

  const clickSlide = () => {
    dispatch(slideToggle(false));
  };

  return (
    <div
      className={`${classes.slide_wrap} ${
        btnBoolean ? classes.show : ""
      } ${dark}`}
    >
      <div className={classes.slide_inner}>
        <div>
          <AiOutlineCloseCircle onClick={clickSlide} />
        </div>
        <ul>
          <h3>Log</h3>
          <a href="https://github.com/future9061" target="_blank">
            <IconMeLi icon={<BsGithub />} text="GitHub" />
          </a>
          <h3>Direct Menu</h3>
          <MeLi />
        </ul>
      </div>
    </div>
  );
}

export default SlideMenu;
