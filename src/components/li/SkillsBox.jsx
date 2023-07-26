import { ThemeContext } from "../../store/Context";
import React, { useContext, useEffect } from "react";

export function SkillsBox({ img, alt, ImgStyle }) {
  const { SkillData, setSelect, select } = useContext(ThemeContext);

  const handleClick = (e) => {
    const selectItem = SkillData.find((item) => item.title === e.target.alt);
    if (selectItem) {
      setSelect(selectItem.content);
    }
  };

  useEffect(() => {
    const imgElem = document.getElementById("image");
    imgElem.addEventListener("click", handleClick);
  }, [select]);

  return (
    <div onClick={handleClick} value={alt} id="image">
      <img
        src={`${process.env.PUBLIC_URL}img/${img}`}
        alt={alt}
        style={ImgStyle}
      />
    </div>
  );
}
