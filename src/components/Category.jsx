import React, { useContext } from "react";
import { BsDiscord, BsGithub } from "react-icons/bs";
import classes from "./Category.module.css";
import MeLi, { IconMeLi } from "./li/MeLi";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiFillCaretRight } from "react-icons/ai";
import { ThemeContext } from "../store/Context";
function Category() {
  const { themeMode } = useContext(ThemeContext);
  let dark = themeMode === "dark" ? classes.dark : "";
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
        <ul>
          <IconMeLi icon={<BsGithub />} text="GitHub" />
        </ul>
      </div>

      <div className={classes.menu_wrap}>
        <div>
          <span>
            <AiFillCaretRight />
          </span>
          <p>Direct Menu</p>
        </div>
        <ul className={classes.menu_wrap_inner}>
          <MeLi text="Javscriript" img="javascript" />
          <MeLi text="React" img="react" />
          <MeLi text="Vue" img="vue" />
          <MeLi text="PWA" img="pwa" />
        </ul>

        <div className={classes.user}>
          <div>
            <div>
              <div className={classes.hidden}>
                <p>
                  <BsDiscord style={{ fontSize: "28px" }} />
                </p>
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
