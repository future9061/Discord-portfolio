import { ThemeContext } from "../../store/Context";
import React, { useCallback, useContext, useEffect, useState } from "react";

// import classes from "../../pages/Skills.module.css";

export function SkillsBox({ img, alt, ImgStyle }) {
  const { talk, setTalk, SkillData } = useContext(ThemeContext);
  const [select, setSelect] = useState("");

  const handleClick = useCallback(
    (e) => {
      e.stopPropagation();
      setSelect(SkillData.find((item) => item.title === e.target.alt));
    },
    [SkillData, setSelect, talk]
  );

  useEffect(() => {
    setTalk(select.content);
    console.log("선택한거 ", select);
  }, [select.content, setTalk]);

  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}img/${img}`}
        alt={alt}
        style={ImgStyle}
        onClick={handleClick}
      />
    </div>
  );
}
