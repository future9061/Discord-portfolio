import React, { useContext } from "react";
import classes from "./Project.module.css";
import { ThemeContext } from "../store/Context";
import Back from "../components/ui/Back";
import ProjectItem from "../components/ProjectItem";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoVuejs } from "react-icons/bi";

export function Project() {
  const { themeMode } = useContext(ThemeContext);
  let dark = themeMode === "dark" ? classes.dark : "";

  return (
    <div className={`${classes.project_wrap} ${dark}`}>
      <Back />
      <div className={classes.project_inner}>
        <h2>💻Project</h2>
        <div className={classes.project_content}>
          <ProjectItem
            title="Adidas"
            keyword="react"
            subkeyword="tailwind"
            color="#61DAFB"
            icon={<RiReactjsLine />}
            secondIcon={<SiTailwindcss />}
            secondkeyword="tailwind"
            secondColor="#06B6D4"
            src="example4.png"
          />
          <ProjectItem
            title="오늘의 집"
            keyword="javascript"
            subkeyword="tailwind"
            color="#F7DF1E"
            icon={<RiReactjsLine />}
            secondIcon={<SiTailwindcss />}
            secondkeyword="tailwind"
            secondColor="#06B6D4"
            src="example4.png"
          />
          <ProjectItem
            title="TO DO List"
            keyword="vue"
            subkeyword="tailwind"
            color="#4FC08D"
            icon={<BiLogoVuejs />}
            secondIcon={<SiTailwindcss />}
            secondkeyword="tailwind"
            secondColor="#06B6D4"
            src="example4.png"
          />
          <ProjectItem
            title="Adidas"
            keyword="react"
            subkeyword="tailwind"
            color="#61DAFB"
            icon={<RiReactjsLine />}
            secondIcon={<SiTailwindcss />}
            secondkeyword="tailwind"
            secondColor="#06B6D4"
            src="example4.png"
          />
          <ProjectItem
            title="TO DO List"
            keyword="vue"
            subkeyword="tailwind"
            color="#4FC08D"
            icon={<BiLogoVuejs />}
            secondIcon={<SiTailwindcss />}
            secondkeyword="tailwind"
            secondColor="#06B6D4"
            src="example4.png"
          />
          <ProjectItem
            title="TO DO List"
            keyword="vue"
            subkeyword="tailwind"
            color="#4FC08D"
            icon={<BiLogoVuejs />}
            secondIcon={<SiTailwindcss />}
            secondkeyword="tailwind"
            secondColor="#06B6D4"
            src="example4.png"
          />
        </div>
      </div>
    </div>
  );
}
