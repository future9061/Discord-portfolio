import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import data from "./SkillData";

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  /*다크모드 */
  // const LocalTheme = window.localStorage.getItem("theme") || "basic";
  // const [themeMode, setThemeMode] = useState(LocalTheme);

  // const chooseTheme = useCallback(() => {
  //   if (themeMode === "basic") {
  //     window.localStorage.setItem("theme", "basic");
  //   } else {
  //     window.localStorage.setItem("theme", "dark");
  //   }
  // }, [themeMode]);

  /*챗봇 */
  const SkillData = [...data];
  const [select, setSelect] = useState(SkillData[0].content);
  const [talk, setTalk] = useState(select);
  const [talkCount, setTalkCount] = useState(0);
  const [talkWrap, settalkWrap] = useState("");

  useEffect(() => {
    if (talk !== select) {
      setTalkCount(0);
      setTalk(select);
      settalkWrap("");
    }
  }, [select, setSelect]);

  /*페이지 이동 및 버튼 관리 */
  const location = useLocation();
  const navigate = useNavigate();
  const [menuTxt, setMenuTxt] = useState(""); //클릭한 요소의 text 가져옴
  const [atCircle, setAtcircle] = useState(""); //navigate되는 path name

  const movePage = useCallback(() => {
    navigate(`/${atCircle}`, { state: { from: location.pathname } });
  }, [atCircle, location.pathname, navigate]);

  useEffect(() => {
    setAtcircle(menuTxt || "Home");
  }, [menuTxt]);

  /*프로젝트 버튼 관리 */
  const [projectBtn, setProjectBtn] = useState("");
  const pathName = location.pathname.replace("/", "");

  /*슬라이드 버튼 */
  const [slideToggle, setSlideToggle] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        atCircle,
        setAtcircle,
        setMenuTxt,
        movePage,
        talk,
        setTalk,
        SkillData,
        select,
        setSelect,
        talkCount,
        setTalkCount,
        talkWrap,
        settalkWrap,
        projectBtn,
        setProjectBtn,
        pathName,
        slideToggle,
        setSlideToggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
