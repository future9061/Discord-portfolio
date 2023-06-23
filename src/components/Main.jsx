import React from "react";
import SideTab from "./SideTab";
import Category from "./Category";
import SubBar from "./SubBar";
import classes from "./Main.module.css";
import Content from "../content/Content";

export default function Main() {
  return (
    <div className={`main_wrap ${classes.Main}`}>
      <SideTab></SideTab>

      <div>
        <SubBar></SubBar>
        <div className="app-align">
          <Category></Category>
          <Content></Content>
        </div>
      </div>
    </div>
  );
}
