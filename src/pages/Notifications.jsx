import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import { getNotifications } from "../store/usersSlice";
import { BeatLoader } from "react-spinners";
import Cookies from "js-cookie";

const Notifications = () => {
  const admin = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (Cookies.get("user") === undefined) {
      Cookies.set("user", "true");
      Cookies.set("website", "ahmedmalekacademy");
    }
    if (Cookies.get("user") === "false") {
      navigate("/signin");
    }

    dispatch(getNotifications());
  }, [admin, navigate, dispatch]);
  const state = useSelector((state) => state.users.notifications.notification);
  const isloading = useSelector((state) => state.users.isLoading);

  return (
    <div className="p-5">
      <div className="">
        <Title title={"الإشعارات"} />
      </div>
      <div className="mt-5 flex justify-center">
        {isloading ? (
          <BeatLoader className="m-auto" color="#2E6FF4" />
        ) : state && !isloading && state.length === 0 ? (
          <h1>لا توجد اشعارات</h1>
        ) : (
          <div
            className={`flex justify-between  my-3 items-center py-3 px-6 rounded-full w-full bg-lightGray hover:bg-gray box-shadow cursor-pointer transition-all`}
          >
            <h1>قام طالب بعمل اي حاجة</h1>
            <p>منذ ساعة</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
