import React from "react";

import { IoPersonSharp } from "react-icons/io5";
import { GiCakeSlice } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import classes from "./Category.module.css";

function Category() {
  return (
    <div className={classes.category_wrap}>
      <div className={classes.birthday_wrap}>
        <ul>
          <li>
            <div>
              <IoPersonSharp></IoPersonSharp>
            </div>
            <p>친구</p>
          </li>
          <li>
            <div>
              <GiCakeSlice style={{ color: "#ffff00" }}></GiCakeSlice>
            </div>
            <p>Mirae의 생일</p>
          </li>
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
          <li>
            <div>
              <div className={classes.hidden}>
                <img src={`${process.env.PUBLIC_URL}img/javascript.png`} />
              </div>
              <div className={classes.circle}></div>
            </div>
            <p>Javascript</p>
          </li>
          <li>
            <div>
              <div className={classes.hidden}>
                <img src={`${process.env.PUBLIC_URL}img/react 1.png`} />
              </div>
              <div className={classes.circle}></div>
            </div>
            <p>React</p>
          </li>
          <li>
            <div>
              <div className={classes.hidden}>
                <img src={`${process.env.PUBLIC_URL}img/pwa.png`} />
              </div>
              <div className={classes.circle}></div>
            </div>
            <p>PWA(mobile)</p>
          </li>
          <li className={classes.user}>
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
              <br></br>
              <small>future#9061</small>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Category;
