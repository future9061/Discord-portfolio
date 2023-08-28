import "./App.css";
import TopBar from "./components/TopBar";
import SubBar from "./components/SubBar";
import SideTab from "./components/SideTab";
import Category from "./components/Category";
import { Outlet, useNavigate } from "react-router-dom";
import ThemeProvider from "./store/Context";
import { useEffect } from "react";
import SlideMenu from "./components/SlideMenu";
import Burger from "./components/Burger";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "./store/store";



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme) { dispatch(changeTheme(localTheme)); }
  }, []);


  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
