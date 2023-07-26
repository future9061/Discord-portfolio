/* eslint-disable no-console */
import React, { useContext, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import classes from "./Back.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../store/Context";

export default function Back() {
  const { movePage, atCircle, setMenuTxt, preBtn } = useContext(ThemeContext);
  //이전 url경로 저장해놓을 state useState는 초기화 됐다가 매번 새로운 값으로

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.from) {
      const preUrls = JSON.parse(
        window.sessionStorage.getItem("preUrls") || "[]"
      );

      // location.pathname이 바뀔때마다 이전 url updatedUrls에 저장
      const updatedUrls = [...preUrls, location.state.from];

      // 배열을 문자열로 변환하여 sessionStorage에 저장
      window.sessionStorage.setItem("preUrls", JSON.stringify(updatedUrls));
    }
  }, [location.pathname]);

  //마지막 경로만 꺼내와서 이동한 다음 삭제해야해
  const handleClick = () => {
    const moveUrl = JSON.parse(
      window.sessionStorage.getItem("preUrls") || "[]"
    );

    //마지막 배열만 꺼내기, 조건은 이전 경로가 0개 이상이라는 전제
    if (moveUrl.length > 0) {
      const lastUrl = moveUrl[moveUrl.length - 1];
      navigate(lastUrl);

      //버튼 활성화
      const btnOn = lastUrl.replace("/", "");

      if (btnOn !== atCircle) {
        setMenuTxt(btnOn);
      }

      //마지막 경로 삭제
      moveUrl.pop();
      //배열 변경됐으니 문자열로 변환해서 다시 session에 저장
      window.sessionStorage.setItem("preUrls", JSON.stringify(moveUrl));
    }
  };

  return (
    <div
      className={classes.back_wrap}
      onClick={() => {
        handleClick();
      }}
    >
      <AiOutlineArrowLeft style={{ display: "inlineBlock" }} />
      <p>Back</p>
    </div>
  );
}
