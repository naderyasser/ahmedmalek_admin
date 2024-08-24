/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  getAllCourses,
  getAllUsers,
  getUserCourses,
} from "../store/usersSlice";
import bg from "../img/Rectangle 5011.png";
import avatar from "../img/avatar.png";
import { UseOneUserCourses } from "../components/Tables";
import FilterMenu from "../components/FilterMenu";
import { enrollCourseForUser } from "../store/statsSlice";
import { Toaster, toast } from "sonner";
import userRemove from "../img/remove-user.png";
import userEdit from "../img/user-avatar.png";
import editPassword from "../img/password.png";
import Model from "../components/Model";
import UserModel from "../components/UserModel";
import PasswordModel from "../components/PasswordModel";
import NotificationModel from "../components/NotificationModel";
import sendImg from "../img/direct.png";
import Cookies from "js-cookie";

const User = () => {
  const { state } = useLocation();
  const [close, setClose] = useState(false);
  const [closeDelete, setCloseDlete] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [passwordModel, setPasswordModel] = useState(false);
  const [notiModel, setNotiModel] = useState(false);
  const [deleteCourseId, setDeleteCourseId] = useState("");
  const param = useParams();
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.auth.user);
  const [classRed, setClassRed] = useState("");

  const navigate = useNavigate();

  const [choosed, setChoosed] = useState(1);

  useEffect(() => {
    dispatch(getAllCourses());
    if (Cookies.get("user") === undefined) {
      Cookies.set("user", "true");
      Cookies.set("website", "ahmedmalekacademy");
    }
    if (Cookies.get("user") === "false") {
      navigate("/signin");
    }

    if (choosed === 2) {
      setCourseChoosed([]);
      setClassRed("");
    }
    if (openModel) {
      dispatch(getAllUsers());
    }
  }, [dispatch, param, admin, navigate, choosed]);

  const courses = useSelector((state) => state && state.users.courses).courses;
  const isLoading = useSelector((state) => state.stats.isLoading);

  const [courseChoosed, setCourseChoosed] = useState([]);
  const [menuSelected, setMenuSelected] = useState("");
  const oneCourse =
    courses && courses.find((ele) => ele.name === courseChoosed);

  const userCourses = useSelector((state) => state.users.userCourses.courses);
  const [searchText, setSearchText] = useState("");

  const coursesForOneUser =
    courses &&
    courses
      .filter((course) => course.name.includes(searchText))
      .filter((course) => course.academic_year == state.academic_year)
      .filter(
        (course) =>
          userCourses &&
          !userCourses.some((userCourse) => userCourse.id === course.id)
      );

  const data = {
    email: state && state.email,
    course_id: oneCourse && oneCourse.id,
  };

  const formHandler = (e) => {
    e.preventDefault();
    if (oneCourse === undefined) {
      setClassRed("border border-red-400");
    } else {
      setClassRed("");
      dispatch(enrollCourseForUser(data)).then((e) => {
        if (e.payload.success === true) {
          setCourseChoosed([]);
          setMenuSelected("");
          dispatch(getUserCourses(param.email));
          toast.success("تم الاضافة");
        }
      });
    }
  };

  return (
    <div className="home-screen ">
      {closeDelete && (
        <Model
          setClose={setCloseDlete}
          deleteUserSCourse={true}
          courseDeleteDate={{ user: param.email, course: deleteCourseId }}
          deleteMode={true}
        />
      )}
      <Toaster position="top-center" richColors />
      {notiModel && (
        <NotificationModel setNotiModel={setNotiModel} data={state} />
      )}
      {passwordModel && (
        <PasswordModel setPasswordModel={setPasswordModel} data={state} />
      )}
      {close && (
        <Model
          setClose={setClose}
          deleteMode={true}
          courseId={state.id}
          userMode={true}
        />
      )}

      {openModel && (
        <UserModel setOpenModel={setOpenModel} currentData={state} />
      )}
      {/* top */}
      <div className="relative gap-3 h-1/3 flex flex-col justify-center items-center my-5 ">
        <div
          onClick={() => setNotiModel(true)}
          className=" z-10 absolute top-3 left-6 gap-3 h-8 rounded-full cursor-pointer flex justify-center items-center hover:scale-125 transition-all"
        >
          <h1 className="text-white">ارسال رسالة</h1>
          <img src={sendImg} alt="" className="w-5 " />
        </div>
        <img
          className={`absolute max-w-none left-1/2 -translate-x-1/2   -bottom-4 ${
            window.innerWidth > 992 && "w-full"
          }   `}
          src={bg}
          alt=""
        />
        <div className="relative">
          <div className="absolute top-1/2 -translate-y-1/2 -right-8  h-36  w-20 flex-col justify-around flex">
            <div
              onClick={() => {
                setClose(true);
              }}
              className="w-8 h-8 rounded-full cursor-pointer  bg-red-400 flex justify-center items-center hover:scale-125 transition-all"
            >
              <img className="w-5 " src={userRemove} alt="" />
            </div>
            <div
              onClick={() => setOpenModel(true)}
              className="w-8 h-8 rounded-full cursor-pointer  bg-red-400 flex justify-center items-center hover:scale-125 transition-all translate-x-3"
            >
              <img className="w-6 " src={userEdit} alt="" />
            </div>
            <div
              onClick={() => setPasswordModel(true)}
              className="w-8 h-8 rounded-full cursor-pointer  bg-red-400 flex justify-center items-center hover:scale-125 transition-all"
            >
              <img className="w-6 " src={editPassword} alt="" />
            </div>
          </div>
          <div className="w-28 h-28 z-10 rounded-full overflow-hidden ">
            <img
              src={state ? state.profile_img : avatar}
              alt=""
              className="w-full"
            />
          </div>
        </div>

        <h1 className="text-white z-10 text-2xl">{state && state.name}</h1>
        <p className="text-white  z-10 text-xs opacity-70 ">
          {state && state.email}
        </p>
      </div>
      {/* main */}

      <div className="flex justify-center items-center mt-9 flex-col gap-5 mx-5 ">
        {/* toggel */}
        <div className="flex justify-center items-center gap-3">
          <h1
            onClick={() => setChoosed(1)}
            className={`m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px] cursor-pointer ${
              choosed === 1 && "bg-darckBlue text-white"
            }`}
          >
            المعلومات
          </h1>
          <h1
            onClick={() => setChoosed(2)}
            className={`m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px] cursor-pointer ${
              choosed === 2 && "bg-darckBlue text-white"
            }`}
          >
            الكورسات
          </h1>
          <h1
            onClick={() => setChoosed(3)}
            className={`m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px] cursor-pointer ${
              choosed === 3 && "bg-darckBlue text-white"
            }`}
          >
            الإختبارات
          </h1>
        </div>
        {/* content */}
        {choosed === 1 ? (
          <div className="p-5 rounded-md bg-lightGray border border-gray flex flex-col gap-4 ">
            <div className="flex justify-between gap-7 items-center ">
              <h1>الاسم</h1>
              <h1 className="flex-grow text-end">{state && state.name}</h1>
            </div>
            <div className="flex justify-between gap-7 items-center ">
              <h1>السنة الدراسية</h1>
              <h1 className="flex-grow text-end">
                {state && state.academic_year}
              </h1>
            </div>
            <div className="flex justify-between gap-7 items-center ">
              <h1>التخصص</h1>
              <h1 className="flex-grow text-end">
                {state && state.academic_section}
              </h1>
            </div>
            <div className="flex justify-between gap-7 items-center ">
              <h1>البريد الاليكتروني</h1>
              <h1 className="flex-grow text-end">{state && state.email}</h1>
            </div>
            <div className="flex justify-between gap-7 items-center ">
              <h1>رقم التلفون</h1>
              <h1 className="flex-grow text-end">
                {state && state.phone_number}
              </h1>
            </div>
            <div className="flex justify-between gap-7 items-center ">
              <h1>رقم ولي الامر</h1>
              <h1 className="flex-grow text-end">
                {state && state.father_number}
              </h1>
            </div>
            <div className="flex justify-between gap-7 items-center ">
              <h1>المحافظة</h1>
              <h1 className="flex-grow text-end">{state && state.city}</h1>
            </div>
          </div>
        ) : choosed === 2 ? (
          <div className="home-screen p-5">
            <form
              className=" p-5 my-5 mb-8 border-b border-gray  "
              onSubmit={formHandler}
            >
              <div
                className={`flex justify-between gap-2 items-center flex-wrap `}
              >
                <div className={`${classRed} `}>
                  <FilterMenu
                    data={coursesForOneUser}
                    title={"الكورس"}
                    selected={searchText}
                    setAcadimcYearChoosed={setCourseChoosed}
                    notName={true}
                  />
                </div>
                <div className="md:w-1/3 w-full">
                  <input
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                    placeholder="بحث ....."
                    className="back-icon w-full border focus:border-gray border-lightGray rounded-2xl text-base py-1 px-5 outline-none "
                    type="text"
                  />
                </div>
                <div className="flex-grow flex justify-end items-center">
                  <button
                    type="submit"
                    className=" text-white font-medium text-base cursor-pointer py-2 px-3 gap-3 bg-buttonBlue rounded-full mt-3 text-left"
                  >
                    {isLoading ? "يتم الإنشاء" : "إضافة"}
                  </button>
                </div>
              </div>
            </form>

            <div className="overflow-x-auto box-shadow mt-5 ">
              <UseOneUserCourses
                email={param}
                setClose={setCloseDlete}
                setDeleteCourseId={setDeleteCourseId}
              />
            </div>
          </div>
        ) : (
          <div>1</div>
        )}
      </div>
    </div>
  );
};

export default User;
