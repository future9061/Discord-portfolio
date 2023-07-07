import React from "react";
import { BsDiscord, BsGithub } from "react-icons/bs";
import classes from "./Category.module.css";
import BrLi from "./li/BrLi";
import MeLi from "./li/MeLi";
import { RiArrowDownSLine } from "react-icons/ri";
function Category() {
  return (
    <div className={classes.category_wrap}>
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
          <RiArrowDownSLine style={{ marginTop: "10px" }} />
          <p>Log</p>
        </div>
        <ul>
          <BrLi
            icon={<BsGithub />}
            text="Git hub"
            iconStyle={{ color: "#fff", fontSize: "30px", marginRight: "6px" }}
            bgStyle={{ fontSize: "17px" }}
          />
        </ul>
      </div>

      <div className={classes.menu_wrap}>
        <div>
          <span>
            <RiArrowDownSLine style={{ marginTop: "10px" }} />
          </span>
          <p>Direct Menu</p>
        </div>
        <ul className={classes.menu_wrap_inner}>
          <MeLi text="javscriript" img="javascript" />
          <MeLi text="React" img="react" />
          <MeLi text="Vue" img="vue" />
          <MeLi text="PWA" img="pwa" />
        </ul>

        <div className={classes.user}>
          <div>
            <div>
              <div className={classes.hidden}>
                <p>
                  <BsDiscord style={{ fontSize: "20px" }} />
                </p>
              </div>
            </div>
            <div className={classes.text_wrap}>
              <span>미래의 Portfolio</span>
              <small>future#9061</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
