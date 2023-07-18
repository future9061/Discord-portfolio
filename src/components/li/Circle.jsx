import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../store/Context";
import classes from "../SideTab.module.css";

export function Circle({ src, text, action, name }) {
  const { setMenuTxt, movePage, atCircle } = useContext(ThemeContext);

  useEffect(() => {
    movePage();
  }, [atCircle]);

  return (
    <li
      className={`${action === text ? classes.fixedStyle : ""} ${
        classes[name]
      }`}
      onClick={() => {
        setMenuTxt(text);
        movePage();
      }}
    >
      {action === text ? <section></section> : <span></span>}

      {action === text ? (
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

export function CircleIcon({ icon, text, action }) {
  const { setMenuTxt } = useContext(ThemeContext);
  return (
    <li
      className={`${action === text ? classes.fixedStyle : ""}`}
      onClick={() => {
        setMenuTxt(text);
      }}
    >
      {action === text ? (
        <section className={classes.white}></section>
      ) : (
        <span></span>
      )}

      {action === text ? (
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
