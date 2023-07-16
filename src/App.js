import "./App.css";
import TopBar from "./components/TopBar";
import SubBar from "./components/SubBar";
import SideTab from "./components/SideTab";
import Category from "./components/Category";
import { Outlet, useNavigate } from "react-router-dom";
import ThemeProvider from "./store/Context";
import Loading from "./pages/Loading";
import { useState, useEffect } from "react";

function App() {
  const sessionVal = window.sessionStorage.getItem("isLoading");
  const [isLoading, setIsLoading] = useState(
    sessionVal ? JSON.parse(sessionVal) : true
  );
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("isLoading", JSON.stringify(isLoading));
  }, [isLoading]);

  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ThemeProvider>
          <div className="wrap">
            <TopBar />
            <div className="top">
              <SideTab />
              <div className="main">
                <Category />
                <div className="outlet">
                  <SubBar />
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
