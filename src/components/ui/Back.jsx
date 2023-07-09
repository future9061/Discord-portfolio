import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import classes from "./Back.module.css"
import { useNavigate } from "react-router-dom";


export default function Back() {
    const navigate = useNavigate();

  return (
 
    <div className={classes.back_wrap} onClick={()=>{navigate(-1)}}> 
        <AiOutlineArrowLeft  style={{display:"inlineBlock"}}/>
        <p>Back</p>
    </div>
  
  )
}
