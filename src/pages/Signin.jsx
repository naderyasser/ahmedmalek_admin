import React, { useRef } from "react";
import shape from "../img/shapes.png";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Signin = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();
  const usename = useRef(null);
  const password = useRef(null);
  const handelSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: usename.current.value,
      password: password.current.value,
    };
    dispatch(signin(data)).then((e) => {
      if (e.payload.States === true) {
        Cookies.set("user", "true");
        navigate("/home");
      }
    });
  };

  return (
    <div className="sign w-screen h-screen relative overflow-hidden flex justify-center items-center">
      <img
        src={shape}
        alt=""
        className="absolute top-0 left-0 w-full opacity-20"
      />
      <div className="container-form mx-auto h-full  flex items-center justify-center">
        <form
          onSubmit={handelSubmit}
          action=""
          className="flex flex-col justify-center items-center z-10 w-full gap-5"
        >
          <h1 className="font-bold text-2xl mb-8 ">تسجيل الدخول</h1>
          <div className="h-6">
            {state.States === false && (
              <p className="text-red-600 ">
                هناك خطأ في الباسورد او اسم المستخدم
              </p>
            )}
          </div>
          <input
            required
            ref={password}
            placeholder="الإيميل"
            className={`input w-full block ${
              state.States === false && "border-red-600 import"
            }`}
            type="text"
          />
          <input
            required
            ref={usename}
            placeholder="الباسورد"
            className={`input w-full block  ${
              state.States === false && "border-red-600 import"
            }`}
            type="password"
          />
          <button
            className="py-5 rounded-full sign w-full text-white cursor-pointer"
            type="submit"
          >
            {isLoading ? " .   .   . " : "تسجيل الدخول"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
