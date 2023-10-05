import "./App.css";
import TopBar from "./components/TopBar";
import SubBar from "./components/SubBar";
import SideTab from "./components/SideTab";
import Category from "./components/Category";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SlideMenu from "./components/SlideMenu";
import Burger from "./components/Burger";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, handleBtn, pathMove } from "./store/store";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.pageSlice)
  const location = useLocation();

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme) { dispatch(changeTheme(localTheme)); }
  }, []);


  const navigate = useNavigate();


  useEffect(() => {
    navigate(`/${state}`, { state: { from: location.pathname } })
  }, [state])

  return (

    <div className="wrap">
      <TopBar />
      <div className="top">
        <Burger />
        <SideTab />
        <div className="main">
          <Category />
          <div className="outlet">
            <SubBar />
            <SlideMenu />
            <Outlet />
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
