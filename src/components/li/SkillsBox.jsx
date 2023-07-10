import React from "react";

export function SkillsBox({ img, alt, ImgStyle }) {
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}img/${img}`}
        alt={alt}
        style={ImgStyle}
      />
    </div>
  );
}
