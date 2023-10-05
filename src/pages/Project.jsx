import React, { useEffect } from "react";
import classes from "./Project.module.css";
import Back from "../components/ui/Back";
import ProjectItem from "../components/ProjectItem";
import { useSelector, useDispatch } from "react-redux";
import { handleBtn } from "../store/store";

export function Project() {
  const theme = useSelector((state) => state.themSlice);
  const dispatch = useDispatch();

  let dark = theme === "dark" ? classes.dark : "";
  useEffect(() => {
    dispatch(handleBtn("All"));
  }, []);

  return (
    <div className={`${classes.project_wrap} ${dark}`}>
      <Back />
      <div className={classes.project_inner}>
        <h2>💻Project</h2>
        <div className={classes.project_content}>
          <ProjectItem />
        </div>
      </div>
    </div>
  );
}
