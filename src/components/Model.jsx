import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCourse, deleteLesson, getLessons } from "../store/statsSlice";
import {
  deleteUser,
  deleteUserCourse,
  getAllCourses,
  getAllUsers,
  getUserCourses,
} from "../store/usersSlice";
import { toast } from "sonner";
import Cookies from "js-cookie";

const Model = ({
  setClose,
  deleteMode,
  courseId,
  deleteName,
  lessonId,
  userMode,
  logout,
  deleteUserSCourse,
  courseDeleteDate,
  deleteCourseMode,
  deleteLessonMode,
}) => {
  const navigate = useNavigate();
  const signOutHandler = () => {
    if (deleteMode && !logout) {
      if (deleteLessonMode) {
        dispatch(deleteLesson(lessonId.id)).then((e) => {
          toast.error("تم الحذف");
          e.payload.success === true && setClose(false);
          dispatch(getLessons(courseId));
        });
      }
      if (userMode) {
        dispatch(deleteUser(courseId)).then((e) => {
          e.payload.success === true && setClose(false);
          toast.error("تم الحذف");
          dispatch(getAllUsers());
          navigate("/users");
        });
      }
      if (deleteCourseMode) {
        dispatch(deleteCourse(courseId)).then((e) => {
          toast.error("تم الحذف");
          e.payload.success === true && setClose(false);
          dispatch(getAllCourses());
        });
      }
      if (deleteUserSCourse) {
        dispatch(deleteUserCourse(courseDeleteDate)).then((e) => {
          toast.error("تم الحذف");
          e.payload.success === true && setClose(false);
          dispatch(getUserCourses(courseDeleteDate.user));
        });
      }
    } else {
      Cookies.set("user", "true");
      navigate("/signin");
    }
    // if (logout) {
    //   Cookies.set("user", "false");
    //   navigate("/signin");
    // } else {
    //   if (deleteName) {
    //     dispatch(deleteLesson(lessonId.id)).then((e) => {
    //       toast.error("تم الحذف");
    //       e.payload.success === true && setClose(false);
    //       dispatch(getLessons(courseId));
    //     });
    //   } else {
    //     if (userMode) {
    //       dispatch(deleteUser(courseId)).then((e) => {
    //         e.payload.success === true && setClose(false);
    //         toast.error("تم الحذف");
    //         dispatch(getAllUsers());
    //         navigate("/users");
    //       });
    //     } else {
    //       if (!deleteUserCourse) {
    //         dispatch(deleteCourse(courseId)).then((e) => {
    //           toast.error("تم الحذف");
    //           e.payload.success === true && setClose(false);
    //           dispatch(getAllCourses());
    //         });
    //       }
    //     }
    //   }
    // }
  };
  const dispatch = useDispatch();
  return (
    <div
      className="flex flex-col justify-center items-center absolute top-0 left-0 w-screen h-screen   
     "
    >
      <div className="min-w-96 rounded-md bg-white min-h-52 flex flex-col justify-center items-center gap-5  z-30   ">
        <h1 className="text-3xl text-darkGray">
          {deleteMode === true ? "هل تريد الحذف" : "هل تريد تسجيل الخروج"}
        </h1>
        <div className="flex justify-between items-center gap-12 ">
          <button
            onClick={() => setClose(false)}
            type="submit"
            className="text-white font-medium text-base cursor-pointer py-2 px-4 gap-3 bg-gray hover:bg-blue-gray-400 transition-all rounded-full"
          >
            إلغاء
          </button>
          <button
            onClick={signOutHandler}
            type="submit"
            className="text-white font-medium text-base cursor-pointer py-2 px-4 gap-3 bg-red-500 rounded-full"
          >
            {deleteMode === true ? "حذف" : "خروج"}
          </button>
        </div>
      </div>
      <div
        onClick={() => {
          setClose(false);
        }}
        className="absolute top-0 left-0 w-screen h-screen bg-black opacity-30 z-20 "
      ></div>
    </div>
  );
};

export default Model;
