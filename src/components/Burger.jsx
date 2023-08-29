import classes from "./Burger.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { slideToggle } from "../store/store";

export default function Burger() {
  const theme = useSelector((state) => state.themSlice);
  const dispatch = useDispatch();
  let dark = theme === "dark" ? classes.dark : "";

  const handleSide = () => {
    dispatch(slideToggle(true));
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
