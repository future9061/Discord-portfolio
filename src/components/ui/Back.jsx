import React, { useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import classes from "./Back.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../store/Context";

export default function Back() {
  const { menuTxt, setMenuTxt } = useContext(ThemeContext);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={classes.back_wrap}
      onClick={() => {
        navigate(-1);
      }}
    >
      <AiOutlineArrowLeft style={{ display: "inlineBlock" }} />
      <p>Back</p>
    </div>
  );
}
