import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { changePassword, getOneUser } from "../store/usersSlice";
import { Toaster, toast } from "sonner";

const PasswordModel = ({ setPasswordModel, data }) => {
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const iniHandler = (e) => {
    e.preventDefault();
    const newPassData = {
      id: data.id,
      data: { password: passwordRef.current.value },
    };
    console.log("here");

    dispatch(changePassword(newPassData)).then((e) => {
      if (e.payload.success === true) {
        dispatch(getOneUser(data));
        setPasswordModel(false);
        toast.warning(" تم التعديل كلمة السر");
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
          <h1 className="text-3xl text-darkGray">تغيير كلمة السر</h1>
          <Toaster position="top-center" richColors />
          <form onSubmit={iniHandler} className="flex flex-col gap-4">
            <input
              ref={passwordRef}
              placeholder="كلمة السر الجديدة"
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
              تغيير كلمة السر
            </button>
          </form>
        </div>
        <div
          onClick={() => {
            setPasswordModel(false);
          }}
          className="absolute top-0 left-0 w-screen h-screen bg-black opacity-30 z-20 "
        ></div>
      </div>
    </div>
  );
};

export default PasswordModel;
