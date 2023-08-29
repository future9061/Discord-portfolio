import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import classes from "./Back.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { pathMove } from "../../store/store";
import { useDispatch } from "react-redux";

export default function Back() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.state && location.state.from) {
      const preUrls = JSON.parse(
        window.sessionStorage.getItem("preUrls") || "[]"
      );

      const updatedUrls = [...preUrls, location.state.from];

      window.sessionStorage.setItem("preUrls", JSON.stringify(updatedUrls));
    }
  }, [location.pathname]);

  const handleClick = () => {
    const moveUrl = JSON.parse(
      window.sessionStorage.getItem("preUrls") || "[]"
    );

    if (moveUrl.length > 0) {
      const lastUrl = moveUrl[moveUrl.length - 1];
      navigate(lastUrl);

      const btnOn = lastUrl.replace("/", "");
      dispatch(pathMove(btnOn));

      moveUrl.pop();
      window.sessionStorage.setItem("preUrls", JSON.stringify(moveUrl));
    }
  };

  return (
    <div className={classes.back_wrap} onClick={handleClick}>
      <AiOutlineArrowLeft style={{ display: "inlineBlock" }} />
      <p>Back</p>
    </div>
  );
}
