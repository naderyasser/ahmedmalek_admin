import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import MobilMenu from "./components/MobilMenu";
import MainMenu from "./components/MainMenu";
import { useState } from "react";
import ReactShortcut from "react-shortcut";
function App() {
  const screenWidth = window.innerWidth;
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const AddCourseShortCut = () => {
    navigate("/courses", { state: true });
  };
  return (
    <div className="flex flex-col  h-full relative ">
      <ReactShortcut keys="Shift+N" onKeysPressed={AddCourseShortCut} />
      <Navbar />
      {/* slid menu */}
      <div
        className={`absolute top-16 z-10 calc-height sm:hidden lg:flex ${
          !openMenu ? "right-[-100%]" : "right-0"
        }    w-full  bg-gray transition-all duration-300 ease-out `}
      >
        <MainMenu openMenu={setOpenMenu} />
      </div>
      {/* main content */}
      <div
        className={`flex  w-full overflow-x-hidden     ${
          screenWidth > 960 ? "calc-height" : "med-outlet"
        }`}
      >
        <div className="hidden w-[300px] lg:flex sticky top-0 right-0">
          <MainMenu />
        </div>
        <div className="bg-[#F6F8FC] flex-grow ">
          <Outlet />
        </div>
      </div>
      <div className="md:hidden fixed bottom-0 right-0 w-full bg-white mobile-menu">
        <MobilMenu openMenu={setOpenMenu} />
      </div>
    </div>
  );
}

export default App;
