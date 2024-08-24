import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Toaster, toast } from "sonner";
import { editUser, getOneUser } from "../store/usersSlice";
import FilterMenu from "./FilterMenu";
import Cookies from "js-cookie";

const UserModel = ({ setOpenModel, currentData }) => {
  const [academicYear, setAcadimcYear] = useState(currentData.academic_year);

  const name = useRef(null);
  const acadmicYear = useRef(null);
  const acadimcSection = useRef(null);
  const email = useRef(null);
  const phoneNumber = useRef(null);
  const fatherNumber = useRef(null);

  useEffect(() => {
    name.current.value = currentData.name;

    acadimcSection.current.value = currentData.academic_section;
    email.current.value = currentData.email;
    phoneNumber.current.value = currentData.phone_number;
    fatherNumber.current.value = currentData.father_number;
  });
  const dispatch = useDispatch();
  const iniHandler = (e) => {
    e.preventDefault();
    const state = {
      id: currentData.id,
      data: {
        name: name.current.value,
        academic_year: academicYear,
        academic_section: acadimcSection.current.value,
        email: currentData.email,
        phone_number: phoneNumber.current.value,
        father_number: fatherNumber.current.value,
        birthdate: currentData.birthdate,
        age: currentData.age,
        profile_img: currentData.profile_img,
        city: currentData.city,
      },
    };
    dispatch(editUser(state)).then((e) => {
      if (e.payload.success === true) {
        dispatch(getOneUser(currentData));
        setOpenModel(false);
        toast.warning("تم التعديل");
      }
    });
  };
  const acadimcYear =
    Cookies.get("website") === "thanawionline" ? [1, 2, 3, 4] : [1, 2, 3];
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
              ref={name}
              placeholder="الاسم"
              className="input w-full block"
              type="text"
              required
            />
            <FilterMenu
              data={acadimcYear}
              selected={academicYear}
              title={"السنة الدراسية"}
              setAcadimcYearChoosed={setAcadimcYear}
            />
            {/* <input
                ref={acadmicYear}
                placeholder="السنة الدراسية"
                className="input w-full block"
                type="number"
                min={1}
                required
              /> */}
            <input
              ref={acadimcSection}
              placeholder="التخصص"
              className="input w-full block"
              type="text"
              required
            />
            <input
              ref={email}
              placeholder="الايميل"
              className="input w-full block opacity-60"
              type="text"
              required
              disabled
            />
            <input
              ref={phoneNumber}
              placeholder="رقم التلفون"
              className="input w-full block"
              type="text"
              required
            />
            <input
              ref={fatherNumber}
              placeholder="رقم تلفون ولي الامر"
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
              تعديل
            </button>
          </form>
        </div>
        <div
          onClick={() => {
            setOpenModel(false);
            name.current.value = "";
            // acadmicYear.current.value = "";
            acadimcSection.current.value = "";
            //   setChoosed("");
          }}
          className="absolute top-0 left-0 w-screen h-screen bg-black opacity-30 z-20 "
        ></div>
      </div>
    </div>
  );
};

export default UserModel;
