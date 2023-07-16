import React, { useContext } from "react";
import classes from "../SubBar.module.css";
import { ThemeContext } from "../../store/Context";

export default function BrLi({ text, action }) {
  const { setMenuTxt } = useContext(ThemeContext);

  return (
    <li
      onClick={() => {
        setMenuTxt(text);
      }}
      className={action === text ? classes.clickStyle : ""}
    >
      <p>{text}</p>
    </li>
  );
}

export function SetIcon({ icon, text, action }) {
  const { setMenuTxt } = useContext(ThemeContext);
  return (
    <div
      onClick={() => {
        setMenuTxt(text);
      }}
      className={action === text ? classes.setting : ""}
    >
      {action === text ? <p>{icon}</p> : <h1>{icon}</h1>}
    </div>
  );
}
