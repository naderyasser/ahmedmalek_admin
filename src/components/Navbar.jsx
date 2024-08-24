import React, { useEffect } from "react";
import avatar from "../img/avatar.png";
import logo from "../img/logo.png";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNotificationsCount } from "../store/usersSlice";
import Cookies from "js-cookie";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotificationsCount());
  }, [dispatch]);
  const count = useSelector((state) => state.users.notificationsCount.count);

  const websiteHandler = (e) => {
    Cookies.set("website", e.target.value);
    window.location.reload();
  };

  return (
    <div className="nav-bar bg-white h-16 w-full  px-8 flex justify-between items-center z-20">
      {/* منصتي */}
      <div className="w-[300px] main-logo lg:flex gap-2 hidden ">
        <h1 className="text-2xl not-italic font-semibold  text-darckBlue">
          {Cookies.get("website")}
        </h1>
        <div className="w-8 h-8">
          <img src={logo} alt="" />
        </div>
      </div>
      {/* لوجو و الاسم */}
      <div className="flex  gap-2 lg:flex-grow">
        {/* <div className="w-8 h-8 rounded-full overflow-hidden">
          <img src={avatar} alt="" />
        </div>
        <div className="subname">
          
          <h3 className="text-lg">محمد هاني احمد</h3>
        </div> */}

        <select
          className="  bg-lightGray rounded-md hover:bg-gray cursor-pointer transition-all pr-3 "
          defaultValue={Cookies.get("website")}
          onChange={websiteHandler}
          // disabled={typeof param.email !== "string"}
        >
  
          <option
            className="hover:bg-gray cursor-pointer"
            value="ahmedmalekacademy"
          >
            ahmedmalekacademy
          </option>
         
        </select>
      </div>
      {/* الاشعارات */}
      <div
        onClick={() => navigate("/notifications")}
        className="notify w-8 h-8 bg-gray flex justify-center items-center rounded-full cursor-pointer relative"
      >
        <div className="bg-red-500 rounded-full w-5 h-5 absolute -top-3 -right-3 flex justify-center items-center text-white text-xs">
          {count}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21.1202 15.5559C20.3065 14.1562 19.8743 12.1472 19.8743 9.75C19.8743 7.66142 19.0446 5.65838 17.5678 4.18153C16.0909 2.70469 14.0879 1.875 11.9993 1.875C9.91071 1.875 7.90768 2.70469 6.43083 4.18153C4.95398 5.65838 4.12429 7.66142 4.12429 9.75C4.12429 12.1481 3.69398 14.1562 2.88023 15.5559C2.71418 15.8414 2.62616 16.1656 2.62501 16.4958C2.62386 16.8261 2.70962 17.1509 2.87367 17.4375C3.03668 17.7243 3.27329 17.9624 3.55906 18.1272C3.84484 18.292 4.16942 18.3775 4.49929 18.375H7.89117C7.98419 19.4003 8.45724 20.3537 9.21738 21.048C9.97752 21.7423 10.9698 22.1273 11.9993 22.1273C13.0288 22.1273 14.0211 21.7423 14.7812 21.048C15.5413 20.3537 16.0144 19.4003 16.1074 18.375H19.4993C19.8287 18.377 20.1527 18.2913 20.4379 18.1265C20.7232 17.9617 20.9593 17.7239 21.1221 17.4375C21.2869 17.1513 21.3734 16.8267 21.3731 16.4965C21.3728 16.1662 21.2856 15.8418 21.1202 15.5559ZM11.9993 19.875C11.567 19.8751 11.148 19.7258 10.8132 19.4525C10.4784 19.1791 10.2482 18.7985 10.1618 18.375H13.8368C13.7503 18.7985 13.5202 19.1791 13.1854 19.4525C12.8505 19.7258 12.4315 19.8751 11.9993 19.875ZM5.12367 16.125C5.95336 14.4375 6.37429 12.2944 6.37429 9.75C6.37429 8.25816 6.96693 6.82742 8.02182 5.77252C9.07671 4.71763 10.5075 4.125 11.9993 4.125C13.4911 4.125 14.9219 4.71763 15.9768 5.77252C17.0317 6.82742 17.6243 8.25816 17.6243 9.75C17.6243 12.2934 18.0443 14.4375 18.874 16.125H5.12367Z"
            fill="#58647C"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
