import "./App.css";
import TopBar from "./components/TopBar";
import SubBar from "./components/SubBar";
import SideTab from "./components/SideTab";
import Category from "./components/Category";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="wrap">
      <TopBar />
      <div className="top">
        <SideTab></SideTab>
        <div className="main">
          <Category></Category>
          <div className="outlet">
            <SubBar></SubBar>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
