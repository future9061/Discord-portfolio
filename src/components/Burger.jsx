import { useContext } from "react";
import classes from "./Burger.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { ThemeContext } from "../store/Context";

export default function Burger() {
  const { themeMode, setSlideToggle } = useContext(ThemeContext);
  let dark = themeMode === "dark" ? classes.dark : "";

  const handleSide = () => {
    setSlideToggle(() => true);
  };

  return (
    <div className={`${classes.burger_wrap} ${dark}`}>
      <div className={classes.burger_inner}>
        <span>
          <RxHamburgerMenu onClick={handleSide} />
        </span>
      </div>
    </div>
  );
}
