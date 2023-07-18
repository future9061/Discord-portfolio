/* eslint-disable no-console */
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import classes from "./Back.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../store/Context";

export default function Back() {
  const { setMenuTxt, movePage } = useContext(ThemeContext);
  //이전 url경로 저장해놓을 state useState는 초기화 됐다가 매번 새로운 값으로

  const [preUrl, setPreUrl] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.from) {
      setPreUrl(preUrl);
    }
  }, [location.state]);

  console.log("과연", preUrlRef);
  // const back = useCallback(() => {
  //   if (preUrlRef.current.length > 0) {
  //     const lastUrl = preUrlRef.current.pop();
  //     setMenuTxt(lastUrl);
  //     movePage();
  //     navigate(lastUrl);
  //   } else {
  //     navigate(-1);
  //   }
  // }, [navigate, setMenuTxt, movePage]);

  return (
    <div className={classes.back_wrap} onClick={() => {}}>
      <AiOutlineArrowLeft style={{ display: "inlineBlock" }} />
      <p>Back</p>
    </div>
  );
}
