import React, { useEffect } from "react";
import classes from "../Category.module.css";
import { useSelector, useDispatch } from "react-redux";
import { handleBtn, pathMove } from "../../store/store";
import { useNavigate, useLocation } from "react-router-dom";

export default function MeLi() {
  const btnState = useSelector((state) => state.projectBtn);
  const dispatch = useDispatch();
  const btnData = ["All", "Javascript", "React", "Vue", "PWA"];
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname.replace("/", "");

  const handleClick = (e) => {
    dispatch(handleBtn(e.target.id));
  };

  useEffect(() => {
    if (btnState && pathName !== "project") {
      navigate("/project");
      dispatch(pathMove("Project"));
    }
  }, [btnState]);

  useEffect(() => {
    if (pathName !== "project") {
      dispatch(handleBtn(""));
    }
  }, [location]);

  return btnData.map((elem, index) => {
    return (
      <li
        key={index}
        onClick={handleClick}
        className={elem === btnState ? classes.active : ""}
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
