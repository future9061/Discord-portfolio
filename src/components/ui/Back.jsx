import React, { useCallback, useContext, useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import classes from "./Back.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../store/Context";

export default function Back() {
  const { movePage, setMenuTxt, backPage } = useContext(ThemeContext);
  // 백 버튼을 누르면 이전 페이지(A 페이지)로 이동하나, 해당 페이지의 버튼(A 버튼)은 활성화 되지 않는 문제 발견
  // ->A 버튼의 useState 값과 백 버튼의 navigate가 무관하기 때문
  //back btn이 이동할 때 조건문을 달아야 할 것 같아
  // 이전 페이지의 url을 가져와서,, setMenuTxt('url')하면 버튼도 활성화 됨!
  //Link의 to 속성에 이전 url을 전달하고, 클릭하면 이전 url을 저장함

  const navigate = useNavigate();
  const location = useLocation();
  const [preUrl, setPreUrl] = useState("");
  // const handleBack = useCallback(() => {
  //   const preUrl = location.state?.from;
  //   console.log(preUrl);
  //   navigate(preUrl, { state: { from: location.pathname } });
  // }, [location.state?.from, navigate, location.pathname]);

  // useEffect(() => {
  //   movePage();
  //   const preUrl = location.state?.from;
  //   console.log(preUrl);
  // }, [location.pathname]);

  //뒤로 가긴 가는데 딱 한번만 감.. 이전 페이지 값을 저장해둬야해
  console.log(preUrl);
  const pageBack = useCallback(() => {
    setPreUrl(location.state?.from);
    navigate("preUrl");
  }, [location.pathname, navigate]);

  return (
    <div className={classes.back_wrap} onClick={pageBack}>
      <AiOutlineArrowLeft style={{ display: "inlineBlock" }} />
      <p>Back</p>
    </div>
  );
}
