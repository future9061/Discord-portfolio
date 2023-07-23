import classes from "./Burger.module.css";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Burger() {
  return (
    <div className={classes.burger_wrap}>
      <div className={classes.burger_inner}>
        <span>
          <RxHamburgerMenu />
        </span>
      </div>
    </div>
  );
}
