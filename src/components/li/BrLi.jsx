import React from "react";
import classes from "../SubBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { pathMove } from "../../store/store";

export default function BrLi({ text }) {
  const state = useSelector((state) => state.pageSlice);
  const dispatch = useDispatch();

  return (
    <li
      onClick={() => {
        dispatch(pathMove(text));
      }}
      className={state === text ? classes.clickStyle : ""}
    >
      <p>{text}</p>
    </li>
  );
}

export function SetIcon({ icon, text }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.pageSlice);

  return (
    <div
      onClick={() => {
        dispatch(pathMove(text));
      }}
      className={state === text ? classes.setting : ""}
    >
      {state === text ? <p>{icon}</p> : <h1>{icon}</h1>}
    </div>
  );
}
