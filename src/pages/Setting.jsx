import React, { useEffect } from "react";
import classes from "./Setting.module.css";
import Back from "../components/ui/Back";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../store/store";

export function Setting() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themSlice);
  let dark = theme === "dark" ? classes.dark : "";

  const handleTheme = (theme) => {
    dispatch(changeTheme(theme));
    localStorage.setItem("theme", theme);
  };

  return (
    <div className={`${classes.setting_wrap} ${dark}`}>
      <Back />
      <div className={classes.setting_inner}>
        <h2>⚙Theme Settings</h2>
        <div>
          <div className={classes.basic_mode}>
            <div className={classes.img_wrap}>
              <img
                onClick={(e) => {
                  e.stopPropagation();
                  handleTheme("basic");
                }}
                src={`${process.env.PUBLIC_URL}/img/basic-mode.webp`}
                alt="basic-mode"
              />
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleTheme("basic");
              }}
            >
              Basic
            </button>
          </div>
          <div className={classes.dark_mode}>
            <div className={classes.img_wrap}>
              <img
                onClick={(e) => {
                  e.stopPropagation();
                  handleTheme("dark");
                }}
                src={`${process.env.PUBLIC_URL}/img/blue-mode.webp`}
                alt="blue-mode"
              />
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleTheme("dark");
              }}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
