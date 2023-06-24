import React from "react";
import SideTab from "./SideTab";
import Category from "./Category";
import SubBar from "./SubBar";
import classes from "./Main.module.css";
import Content from "../content/Content";
import SideContent from "../content/SideContent";

export default function Main() {
  return (
    <div className={classes.main_wrap}>
      <SideTab></SideTab>
      <div style={{ width: "95%", height: "100%" }}>
        <SubBar></SubBar>
        <div className={classes.align}>
          <Category></Category>
          <Content></Content>
          <SideContent></SideContent>
        </div>
      </div>
    </div>
  );
}
