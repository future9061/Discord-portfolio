import React from "react";

import { IoPersonSharp } from "react-icons/io5";
import { GiCakeSlice } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import classes from "./Category.module.css";
import BrLi from "./li/BrLi";
import MeLi from "./li/MeLi";
import { RiArrowDownSLine } from "react-icons/ri";
function Category() {
  return (
    <div className={classes.category_wrap}>
      <div className={classes.birthday_wrap}>
        <ul>
          <li>
            <img src={`${process.env.PUBLIC_URL}/img/work3.png`} />
            Mirae's Work
            <div>
              <RiArrowDownSLine />
            </div>
          </li>
          <BrLi icon={<IoPersonSharp />} text="친구" />
          <BrLi
            icon={<GiCakeSlice />}
            text="Mirae의 생일"
            iconStyle={{ color: "#ffff00" }}
          />
        </ul>
      </div>
      <div className={classes.menu_wrap}>
        <div className={classes.title}>
          <p>다이렉트 메뉴</p>
          <span>
            <AiOutlinePlus></AiOutlinePlus>
          </span>
        </div>
        <ul>
          <MeLi text="javscriript" img="javascript" />
          <MeLi text="React" img="react 1" />
          <MeLi text="PWA(mobile)" img="pwa" />
        </ul>
        <div className={classes.user}>
          <div>
            <div className={classes.hidden}>
              <p>
                <BsDiscord />
              </p>
            </div>
            <div className={classes.circle}></div>
          </div>
          <div className={classes.text_wrap}>
            <span>미래의 Portfolio</span>
            <small>future#9061</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
