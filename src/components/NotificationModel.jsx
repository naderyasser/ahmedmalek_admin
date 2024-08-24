import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Toaster, toast } from "sonner";
import { sentNotification } from "../store/usersSlice";

const NotificationModel = ({ setNotiModel, data }) => {
  const notiRef = useRef(null);
  const url = useRef(null);
  const dispatch = useDispatch();

  const iniHandler = (e) => {
    const notiData = {
      id: data.id,
      data: {
        notificashen: notiRef.current.value,
        url: url.current.value,
        type: "alert",
      },
    };
    e.preventDefault();
    dispatch(sentNotification(notiData)).then((e) => {
      if (e.payload.success === true) {
        dispatch(sentNotification(notiData));
        setNotiModel(false);
        console.log("wopwo");
        toast.success("تم الارسال");
      }
    });
  };
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center absolute top-0 left-0 w-screen h-screen  
   "
      >
        <div className="min-w-96 rounded-md bg-white min-h-52 flex flex-col justify-center items-center gap-5 p-5 z-30   ">
          <h1 className="text-3xl text-darkGray">تعديل بيانات الطالب</h1>
          <Toaster position="top-center" richColors />
          <form onSubmit={iniHandler} className="flex flex-col gap-4">
            <input
              ref={notiRef}
              placeholder="نص الشعار"
              className="input w-full block"
              type="text"
              required
            />
            <input
              ref={url}
              placeholder="URL"
              className="input w-full block"
              type="text"
              required
            />

            <button
              type="submit"
              className={`text-white font-medium text-base cursor-pointer py-2 px-4 gap-3 
      bg-light-blue-700
           hover:bg-darckBlue transition-all rounded-full`}
            >
              ارسال
            </button>
          </form>
        </div>
        <div
          onClick={() => {
            setNotiModel(false);
          }}
          className="absolute top-0 left-0 w-screen h-screen bg-black opacity-30 z-20 "
        ></div>
      </div>
    </div>
  );
};

export default NotificationModel;
