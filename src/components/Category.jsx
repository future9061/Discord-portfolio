import React from "react";
import { BsGithub } from "react-icons/bs";
import classes from "./Category.module.css";
import MeLi, { IconMeLi } from "./li/MeLi";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiFillCaretRight } from "react-icons/ai";
import { useSelector } from "react-redux";

function Category() {
  const theme = useSelector((state) => state.themSlice);
  let dark = theme === "dark" ? classes.dark : "";

  return (
    <div className={`${classes.category_wrap} ${dark}`}>
      <div className={classes.title}>
        <div className={classes.title_inner}>
          <img src={`${process.env.PUBLIC_URL}/img/mirae work.png`} />
          <p> Mirae Work</p>
          <span>
            <RiArrowDownSLine />
          </span>
        </div>
      </div>

      <div className={classes.link_wrap}>
        <div>
          <span>
            <AiFillCaretRight />
          </span>
          <p>Log</p>
        </div>
        <a href="https://github.com/future9061" target="_blank">
          <ul>
            <IconMeLi icon={<BsGithub />} text="GitHub" />
          </ul>
        </a>
      </div>

      <div className={classes.menu_wrap}>
        <div>
          <span>
            <AiFillCaretRight />
          </span>
          <p>Direct Menu</p>
        </div>
        <ul className={classes.menu_wrap_inner}>
          <MeLi />
        </ul>

        <div className={classes.user}>
          <div>
            <div>
              <div className={classes.hidden}>
                <img
                  src={process.env.PUBLIC_URL + "/img/logowhiteimg.png"}
                  alt="white_logo"
                />
              </div>
            </div>
            <div className={classes.text_wrap}>
              <b>미래의 Portfolio</b>
              <small>future#9061</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
