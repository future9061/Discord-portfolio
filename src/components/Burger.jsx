import { useContext } from "react";
import classes from "./Burger.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { ThemeContext } from "../store/Context";
import { useSelector } from "react-redux";

export default function Burger() {
  const { setSlideToggle } = useContext(ThemeContext);
  const theme = useSelector((state) => state.themSlice);
  let dark = theme === "dark" ? classes.dark : "";

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
