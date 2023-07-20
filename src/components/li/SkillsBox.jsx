import React from "react";
import classes from "../../pages/Skills.module.css"
import { SkillData } from "../../store/SkillData";
console.log(SkillData)

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

export const SkillsModal=({ title,content})=> { 
  <div className={classes.modal_wrap}>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
}
