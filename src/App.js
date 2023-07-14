import "./App.css";
import TopBar from "./components/TopBar";
import SubBar from "./components/SubBar";
import SideTab from "./components/SideTab";
import Category from "./components/Category";
import { Outlet } from "react-router-dom";
import ThemeProvider from "./store/Context";
import Loading from "./pages/Loading";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, [isLoading]); //새로고침 누를 때마다 나타나는 거 싫어.. 재랜더링 되지 않는 변수가 뭐있지?

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
