import React, { useContext, useEffect, useState } from "react";
import classes from "../Category.module.css";
import { ThemeContext } from "../../store/Context";

export default function MeLi() {
  const { setMenuTxt, setProjectBtn, location } = useContext(ThemeContext);
  const btnData = ["All", "Javascript", "React", "Vue", "PWA"];
  const [clickBtn, setClickBtn] = useState("");
  const pathName = location.pathname.replace("/", "");

  const handleClick = (e) => {
    setMenuTxt("Project");

    setClickBtn((pre) => {
      return e.target.value;
    });

    setProjectBtn(() => {
      return e.target.id;
    });
  };

  /* 페이지 벗어나면 버튼 초기화 코드 */

  useEffect(() => {
    if (clickBtn != "" && pathName !== "Project") {
      setClickBtn("");
    }
  }, [pathName, setClickBtn, clickBtn]);

  return btnData.map((elem, index) => {
    return (
      <li
        onClick={handleClick}
        value={index}
        className={index === clickBtn ? classes.active : ""}
        id={elem}
      >
        <div>
          <div className={classes.hidden}>
            <img
              src={`${process.env.PUBLIC_URL}img/${elem}.png`}
              style={{ pointerEvents: "none" }}
            />
          </div>
          <div className={classes.circle}></div>
        </div>
        <p style={{ pointerEvents: "none" }}>{elem}</p>
      </li>
    );
  });
}
export function IconMeLi({ icon, text }) {
  return (
    <li>
      <span>{icon}</span>
      <p>{text}</p>
    </li>
  );
}
