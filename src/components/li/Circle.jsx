import React from "react";
import classes from "../SideTab.module.css";
import { useDispatch, useSelector } from "react-redux";
import { pathMove } from "../../store/store";

export function Circle({ src, text, name }) {
  const state = useSelector((state) => state.pageSlice);
  const dispatch = useDispatch();

  return (
    <li
      className={`${state === text ? classes.fixedStyle : ""} ${classes[name]}`}
      onClick={() => {
        dispatch(pathMove(text));
      }}
    >
      {state === text ? <section></section> : <span></span>}

      {state === text ? (
        <nav className={classes.width}>
          <div>
            <img src={src} alt="sidetab" />
          </div>
        </nav>
      ) : (
        <article>
          <li>
            <img src={src} alt="sidetab" />
          </li>
        </article>
      )}

      <p>{text}</p>
    </li>
  );
}

export function CircleIcon({ icon, text }) {
  const state = useSelector((state) => state.pageSlice);
  const dispatch = useDispatch();

  return (
    <li
      className={`${state === text ? classes.fixedStyle : ""}`}
      onClick={() => {
        dispatch(pathMove(text));
      }}
    >
      {state === text ? (
        <section className={classes.white}></section>
      ) : (
        <span></span>
      )}

      {state === text ? (
        <nav className={classes.icon}>
          <p>{icon}</p>
        </nav>
      ) : (
        <div className={classes.icon}>
          <p>{icon}</p>
        </div>
      )}

      <p>{text}</p>
    </li>
  );
}
export function CirclePlus({ icon }) {
  return (
    <li>
      <div className={classes.icon}>
        <p>{icon}</p>
      </div>
    </li>
  );
}
