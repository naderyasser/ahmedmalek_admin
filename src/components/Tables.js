/* eslint-disable eqeqeq */
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAllCourses,
  getAllUsers,
  getOneUser,
  getUserCourses,
} from "../store/usersSlice";
import dateFormat from "dateformat";
import avatar from "../img/avatar.png";
import link from "../img/link.png";

import { BeatLoader } from "react-spinners";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
import { getLessons } from "../store/statsSlice";
import arrowImg from "../img/arrow-up.png";
import { nextCourse, previousCourse } from "../store/authSlice";
import { toast } from "sonner";

// last purches
export const UseHomeTable = ({ searchText }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const [currentData, setCurrentData] = useState([]);
  const state = useSelector((state) => state.users.users.users);
  const isLoading = useSelector((state) => state.users.isLoading);
  const isRejected = useSelector((state) => state.users.isRejected);
  const errMessage = useSelector((state) => state.users.message);

  return (
    <table className="  w-full flex-grow  h-fit ">
      <thead className="bg-lightGray text-tableHead">
        <tr>
          <th className="text-tableHead font-normal text-x-[16px]">
            <h2>الطالب</h2>
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right  min-w-32">
            السنة الدراسية
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right min-w-32">
            سعر الكورس
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right min-w-32 ">
            اسم الكورس
          </th>
        </tr>
      </thead>
      <tbody>
        {state &&
          !isLoading &&
          currentData.map((user) => {
            return (
              <tr className="pl-3" key={user.id}>
                <td className="min-w-60">
                  <div className="flex justify-start items-center gap-4">
                    <div className="w-11 rounded-full overflow-hidden">
                      <img
                        src={user.profile_img ? user.profile_img : avatar}
                        alt=""
                      />
                    </div>
                    <div className="text-right">
                      <h1 className="font-medium  text-sm text-darkGray ">
                        {user.name}
                      </h1>
                      <p className="text-lightText text-[12px]">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className=" ">
                  <p
                    className={`text-xs  text-white  font-normal m w-fit py-1 px-3 rounded-full ${
                      user.academic_year === "1"
                        ? "bg-[#F4CB3C]"
                        : user.academic_year === "2"
                        ? "bg-[#2E6FF4] "
                        : user.academic_year === "3"
                        ? "bg-[#18B477]"
                        : "bg-transparent"
                    }`}
                  >
                    {`${user.academic_year}ث`}
                  </p>
                </td>
                <td>100</td>
                <td>
                  <p className="text-xs text-lightText font-normal m-auto">
                    اسم الكورس
                  </p>
                </td>
              </tr>
            );
          })}
        {isRejected && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <div>{errMessage}</div>
              </div>
            </td>
          </tr>
        )}
        {/* loading  */}
        {isLoading && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <BeatLoader className="m-auto" color="#2E6FF4" />
              </div>
            </td>
          </tr>
        )}
        {/* data not found  */}
        {state && !isLoading && currentData.length === 0 && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <h1 className="text-lg ">لا توجد بيانات لعرضها</h1>
              </div>
            </td>
          </tr>
        )}
      </tbody>
      {
        <tfoot className="text-center">
          <tr>
            <td colSpan={5}>
              <div className="w-full flex justify-start items-start overflow-auto">
                {state && (
                  <Pagination
                    searchText={searchText}
                    data={state}
                    setCurrentDate={setCurrentData}
                  />
                )}
              </div>
            </td>
          </tr>
        </tfoot>
      }
    </table>
  );
};

//courses
export const UseCoursesTable = ({
  searchText,
  acadimcYearChoosed,
  filter,
  monthChoosed,
  setClose,
  setCourseId,
  setEditMode,
  setOpenModel,
  setEditData,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // const wow = async () => {
    //   await console.log("get courses");
    // };
    // const students = async () => {
    //   await console.log("get students");
    // };

    // const [] = await Promise.all([wow,students])
    dispatch(getAllCourses());
  }, [dispatch]);
  const [currentData, setCurrentData] = useState([]);
  const state = useSelector((state) => state.users.courses.courses);
  const isLoading = useSelector((state) => state.users.isLoading);
  const isRejected = useSelector((state) => state.users.isRejected);
  const errMessage = useSelector((state) => state.users.message);
  const navigate = useNavigate();

  return (
    <table className="  w-full flex-grow   ">
      <thead className="bg-lightGray text-tableHead">
        <tr>
          <th className="text-tableHead font-normal text-x-[16px]">
            <h2>الكورسات</h2>
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right  min-w-32">
            عدد الطلاب
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right min-w-32">
            سعر الكورس
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right min-w-32 ">
            التاريخ
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right min-w-32 ">
            السنة
          </th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {!isLoading &&
          state &&
          currentData.map((course) => {
            return (
              <tr className="pl-3" key={course.id}>
                <td className="min-w-60">
                  <div className="text-right gap-4">
                    <h1 className="font-medium  text-base  text-darkGray ">
                      {course.name}
                    </h1>
                    <div
                      onClick={() =>
                        navigate(`/onecourse/${course.id}/${course.name}`)
                      }
                      className="flex justify-start items-center gap-2 cursor-pointer"
                    >
                      <p className="text-darckBlue text-[12px]">لينك الكورس</p>
                      <img className="w-3 " src={link} alt="" />
                    </div>
                  </div>
                </td>
                <td className=" ">10</td>
                <td>{course.price}</td>
                <td>{dateFormat(course.created_at, "dd - mm - yyyy")}</td>
                <td>
                  <p
                    className={`text-xs  text-white  font-normal m w-fit py-1 px-3 rounded-full ${
                      course.academic_year == "1"
                        ? "bg-[#F4CB3C]"
                        : course.academic_year == "2"
                        ? "bg-[#2E6FF4] "
                        : course.academic_year == "3"
                        ? "bg-[#18B477]"
                        : course.academic_year == "4"
                        ? "bg-red-600"
                        : "bg-transparent"
                    }`}
                  >
                    {`${course.academic_year}ث`}
                  </p>
                </td>
                <td>
                  <p
                    onClick={() => {
                      setOpenModel(true);
                      setEditMode(true);
                      setEditData(course);
                    }}
                    className=" m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px] cursor-pointer"
                  >
                    تعديل
                  </p>
                </td>

                <td>
                  <p
                    onClick={() => {
                      setClose(true);
                      setCourseId(course.id);
                    }}
                    className=" m-auto py-1 px-5 border border-red-400 w-fit rounded-3xl text-black text-[16px] cursor-pointer"
                  >
                    حذف
                  </p>
                </td>
              </tr>
            );
          })}
        {isRejected && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <div>{errMessage}</div>
              </div>
            </td>
          </tr>
        )}
        {/* loading  */}
        {isLoading && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <BeatLoader className="m-auto" color="#2E6FF4" />
              </div>
            </td>
          </tr>
        )}
        {/* data not found  */}
        {state && !isLoading && currentData.length === 0 && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <h1 className="text-lg ">لا توجد بيانات لعرضها</h1>
              </div>
            </td>
          </tr>
        )}
      </tbody>
      <tfoot className="text-center">
        <tr>
          <td colSpan={5}>
            <div className="w-full flex justify-start items-start overflow-auto">
              {state && (
                <Pagination
                  filter={filter}
                  acadimcYearChoosed={acadimcYearChoosed}
                  monthChoosed={monthChoosed}
                  searchText={searchText}
                  data={state}
                  setCurrentDate={setCurrentData}
                />
              )}
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

//users
export const UseUsersTable = ({ searchText, setClose, setUserId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const [currentData, setCurrentData] = useState([]);

  const state = useSelector((state) => state.users.users.users);
  const isLoading = useSelector((state) => state.users.isLoading);
  const isRejected = useSelector((state) => state.users.isRejected);
  const errMessage = useSelector((state) => state.users.message);
  const navigate = useNavigate();
  return (
    <table className="  w-full flex-grow   ">
      <thead className="bg-lightGray text-tableHead">
        <tr>
          <th className="text-tableHead font-normal text-x-[16px]">
            <h2>الطالب</h2>
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right  min-w-32">
            رقم الطالب
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right min-w-32">
            رقم ولي الأمر
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right min-w-32 ">
            السنة الدراسية
          </th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {state &&
          !isLoading &&
          currentData.map((user) => {
            return (
              <tr className="pl-3" key={user.id}>
                <td className="min-w-60">
                  <div className="flex justify-start items-center gap-4">
                    <div className="w-11 rounded-full overflow-hidden">
                      <img
                        src={user.profile_img ? user.profile_img : avatar}
                        alt=""
                      />
                    </div>
                    <div className="text-right">
                      <h1 className="font-medium  text-sm text-darkGray ">
                        {user.name}
                      </h1>
                      <p className="text-lightText text-[12px]">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td>{user.phone_number}</td>
                <td>{user.father_number}</td>
                <td className=" ">
                  <p
                    className={`text-xs  text-white  font-normal m w-fit py-1 px-3 rounded-full ${
                      user.academic_year === "1"
                        ? "bg-[#F4CB3C]"
                        : user.academic_year === "2"
                        ? "bg-[#2E6FF4] "
                        : user.academic_year === "3"
                        ? "bg-[#18B477]"
                        : user.academic_year === "4"
                        ? "bg-red-500"
                        : "bg-transparent"
                    }`}
                  >
                    {`${user.academic_year}ث`}
                  </p>
                </td>
                <td>
                  <p
                    onClick={() => {
                      setClose(true);
                      setUserId(user.id);
                    }}
                    className=" m-auto py-1 px-5 border border-red-400 w-fit rounded-3xl text-black text-[16px] cursor-pointer"
                  >
                    حذف
                  </p>
                </td>
                <td>
                  <p
                    onClick={() =>
                      navigate(`/user/${user.email}`, { state: user })
                    }
                    className=" m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px] cursor-pointer"
                  >
                    فتح
                  </p>
                </td>
              </tr>
            );
          })}
        {isRejected && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <div>{errMessage}</div>
              </div>
            </td>
          </tr>
        )}
        {/* loading  */}
        {isLoading && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <BeatLoader className="m-auto" color="#2E6FF4" />
              </div>
            </td>
          </tr>
        )}
        {/* data not found  */}
        {state && !isLoading && currentData.length === 0 && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <h1 className="text-lg ">لا توجد بيانات لعرضها</h1>
              </div>
            </td>
          </tr>
        )}
      </tbody>
      <tfoot className="text-center">
        <tr>
          <td colSpan={5}>
            <div className="w-full flex justify-start items-start overflow-auto">
              {state && (
                <Pagination
                  searchText={searchText}
                  data={state}
                  setCurrentDate={setCurrentData}
                />
              )}
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

//exams
export const UseExamsTable = ({ searchText, acadimcYearChoosed }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const [currentData, setCurrentData] = useState([]);

  const state = useSelector((state) => state.users.users.users);
  const isLoading = useSelector((state) => state.users.isLoading);
  const isRejected = useSelector((state) => state.users.isRejected);
  const errMessage = useSelector((state) => state.users.message);

  return (
    <table className="  w-full flex-grow   ">
      <thead className="bg-lightGray text-tableHead">
        <tr>
          <th className="text-tableHead font-normal text-x-[16px]">
            <h2>الطالب</h2>
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right  min-w-32">
            السنة الدراسية
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right min-w-32">
            سعر الكورس
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right min-w-32 ">
            اسم الكورس
          </th>
        </tr>
      </thead>
      <tbody>
        {state &&
          !isLoading &&
          currentData.map((user) => {
            return (
              <tr className="pl-3" key={user.id}>
                <td className="min-w-60">
                  <div className="flex justify-start items-center gap-4">
                    <div className="w-11 rounded-full overflow-hidden">
                      <img
                        src={user.profile_img ? user.profile_img : avatar}
                        alt=""
                      />
                    </div>
                    <div className="text-right">
                      <h1 className="font-medium  text-sm text-darkGray ">
                        {user.name}
                      </h1>
                      <p className="text-lightText text-[12px]">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className=" ">
                  <p
                    className={`text-xs  text-white  font-normal m w-fit py-1 px-3 rounded-full ${
                      user.academic_year === "1"
                        ? "bg-[#F4CB3C]"
                        : user.academic_year === "2"
                        ? "bg-[#2E6FF4] "
                        : user.academic_year === "3"
                        ? "bg-[#18B477]"
                        : "bg-transparent"
                    }`}
                  >
                    {`${user.academic_year}ث`}
                  </p>
                </td>
                <td>100</td>
                <td>
                  <p className="text-xs text-lightText font-normal m-auto">
                    اسم الكورس
                  </p>
                </td>
              </tr>
            );
          })}
        {isRejected && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <div>{errMessage}</div>
              </div>
            </td>
          </tr>
        )}
        {/* loading  */}
        {isLoading && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <BeatLoader className="m-auto" color="#2E6FF4" />
              </div>
            </td>
          </tr>
        )}
        {/* data not found  */}
        {state && !isLoading && currentData.length === 0 && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <h1 className="text-lg ">لا توجد بيانات لعرضها</h1>
              </div>
            </td>
          </tr>
        )}
      </tbody>
      <tfoot className="text-center">
        <tr>
          <td colSpan={5}>
            <div className="w-full flex justify-start items-start overflow-auto">
              {state && (
                <Pagination
                  searchText={searchText}
                  data={state}
                  setCurrentDate={setCurrentData}
                  acadimcYearChoosed={acadimcYearChoosed}
                  filter={true}
                />
              )}
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

// codes
export const UseCodesTable = ({ searchText }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const [currentData, setCurrentData] = useState([]);

  const state = useSelector((state) => state.users.users.users);
  const isLoading = useSelector((state) => state.users.isLoading);

  return (
    <table className="  w-full flex-grow   ">
      <thead className="bg-lightGray text-tableHead">
        <tr>
          <th className="text-tableHead font-normal text-x-[16px] text-right">
            الطالب
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right  min-w-32">
            الكود
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right min-w-32">
            السعر
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right min-w-32 ">
            التاريخ
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right min-w-32 ">
            اسم الكورس
          </th>
        </tr>
      </thead>
      <tbody>
        {state &&
          !isLoading &&
          currentData.map((user) => {
            return (
              <tr className="pl-3" key={user.id}>
                <td className="min-w-60">
                  <div className="flex justify-start items-center gap-4">
                    <div className="w-11 rounded-full overflow-hidden">
                      <img
                        src={user.profile_img ? user.profile_img : avatar}
                        alt=""
                      />
                    </div>
                    <div className="text-right">
                      <h1 className="font-medium  text-sm text-darkGray ">
                        {user.name}
                      </h1>
                      <p className="text-lightText text-[12px]">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className=" ">
                  <p
                    className={`text-xs  text-white  font-normal m w-fit py-1 px-3 rounded-full ${
                      user.academic_year === "1"
                        ? "bg-[#F4CB3C]"
                        : user.academic_year === "2"
                        ? "bg-[#2E6FF4] "
                        : user.academic_year === "3"
                        ? "bg-[#18B477]"
                        : "bg-transparent"
                    }`}
                  >
                    {`${user.academic_year}ث`}
                  </p>
                </td>
                <td>100</td>
                <td>
                  <p className="text-xs text-lightText font-normal m-auto">
                    اسم الكورس
                  </p>
                </td>
                <td>الوحدة الأولى</td>
              </tr>
            );
          })}
        {/* loading  */}
        {isLoading && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <BeatLoader className="m-auto" color="#2E6FF4" />
              </div>
            </td>
          </tr>
        )}
        {/* data not found  */}
        {state && !isLoading && currentData.length === 0 && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <h1 className="text-lg ">لا توجد بيانات لعرضها</h1>
              </div>
            </td>
          </tr>
        )}
      </tbody>
      <tfoot className="text-center">
        <tr>
          <td colSpan={5}>
            <div className="w-full flex justify-start items-start overflow-auto">
              {state && (
                <Pagination
                  searchText={searchText}
                  data={state}
                  setCurrentDate={setCurrentData}
                />
              )}
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
// one user courses
export const UseOneUserCourses = ({
  searchText,
  email,
  setClose,
  setDeleteCourseId,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserCourses(email.email));
  }, [dispatch, email]);

  const [currentData, setCurrentData] = useState([]);

  const state = useSelector((state) => state.users.userCourses.courses);

  const isLoading = useSelector((state) => state.users.isLoading);
  const isRejected = useSelector((state) => state.users.isRejected);
  const errMessage = useSelector((state) => state.users.message);

  return (
    <table className="  w-full flex-grow   ">
      <thead className="bg-lightGray text-tableHead">
        <tr>
          <th className="text-tableHead font-normal text-x-[16px] ">
            الكورسات
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right  min-w-32">
            سعر الكورس
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-right min-w-32">
            تاريخ الشراء
          </th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {state &&
          !isLoading &&
          state.map((course, idex) => {
            return (
              <tr className="pl-3" key={idex}>
                <td className="min-w-60">
                  <h1 className="font-medium  text-sm text-darkGray ">
                    {course.name}
                  </h1>
                </td>
                <td>{course.price}</td>

                <td className=" ">
                  {/* <p
                    className={`text-xs  text-white  font-normal m w-fit py-1 px-3 rounded-full ${
                      course.academic_year === "1"
                        ? "bg-[#F4CB3C]"
                        : course.academic_year === "2"
                        ? "bg-[#2E6FF4] "
                        : course.academic_year === "3"
                        ? "bg-[#18B477]"
                        : "bg-transparent"
                    }`}
                  >
                    {`${course.academic_year}ث`}
                  </p> */}
                  <p>{dateFormat(course.date, "yyyy-mm-dd")}</p>
                </td>
                <td>
                  <p
                    onClick={() => {
                      setClose(true);
                      setDeleteCourseId(course.id);
                    }}
                    className=" m-auto py-1 px-5 border border-red-400 w-fit rounded-3xl text-black text-[16px] cursor-pointer"
                  >
                    حذف
                  </p>
                </td>
              </tr>
            );
          })}
        {isRejected && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <div>{errMessage}</div>
              </div>
            </td>
          </tr>
        )}
        {/* loading  */}
        {isLoading && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <BeatLoader className="m-auto" color="#2E6FF4" />
              </div>
            </td>
          </tr>
        )}
        {/* data not found  */}
        {state && !isLoading && currentData.length === 0 && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <h1 className="text-lg ">لا توجد بيانات لعرضها</h1>
              </div>
            </td>
          </tr>
        )}
      </tbody>
      <tfoot className="text-center">
        <tr>
          <td colSpan={5}>
            <div className="w-full flex justify-start items-start overflow-auto">
              {state && (
                <Pagination
                  searchText={searchText}
                  data={state}
                  setCurrentDate={setCurrentData}
                  withoutSearch={true}
                />
              )}
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

//UseLessonsForOneCourse
export const UseLessonsForOneCourse = ({
  searchText,
  id,
  setLessonId,
  setClose,
  setEditMode,
  setEditData,
  setEditType,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLessons(id));
  }, [dispatch, id]);
  const [currentData, setCurrentData] = useState([]);

  const state = useSelector((state) => state.stats.lessonsForOneCourse).lessons;

  const isLoading = useSelector((state) => state.users.isLoading);
  const isRejected = useSelector((state) => state.users.isRejected);
  const errMessage = useSelector((state) => state.users.message);

  return (
    <table className="  w-full flex-grow   ">
      <thead className="bg-lightGray text-tableHead">
        <tr>
          <th className="text-tableHead font-normal text-x-[16px] text-lg text-right">
            الاسم
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-lg text-right  min-w-32">
            النوع
          </th>
          <th className="text-tableHead font-normal text-x-[16px] text-lg text-right min-w-32">
            التاريخ
          </th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {state &&
          !isLoading &&
          currentData.map((lesson) => {
            return (
              <tr className="pl-3" key={lesson.id}>
                <td className="min-w-60 flex justify-start items-center  w-auto">
                  <div className="flex justify-start items-center gap-5 w-1/3">
                    <img
                      onClick={() =>
                        dispatch(previousCourse(lesson.id)).then((e) => {
                          if (e.payload.success === true) {
                            dispatch(getLessons(id));
                            toast.warning("تم التعديل");
                          }
                        })
                      }
                      className=" w-6 bg-light-blue-50  cursor-pointer hover:bg-light-blue-100 rounded-md transition-all"
                      src={arrowImg}
                      alt=""
                    />
                    <img
                      onClick={() =>
                        dispatch(nextCourse(lesson.id)).then((e) => {
                          if (e.payload.success === true) {
                            dispatch(getLessons(id));
                            toast.warning("تم التعديل");
                          }
                        })
                      }
                      className="rotate-180 w-6 bg-light-blue-50  cursor-pointer hover:bg-light-blue-100 rounded-md transition-all"
                      src={arrowImg}
                      alt=""
                    />
                  </div>
                  <h1 className="font-medium flex-grow text-sm text-darkGray  ">
                    {lesson.name}
                  </h1>
                </td>
                <td>
                  <p
                    className={`text-base  text-white  font-normal m w-fit text-center py-1 px-3  rounded-full ${
                      lesson.Ltype === "section"
                        ? "bg-[#F4CB3C]"
                        : lesson.Ltype === "video"
                        ? "bg-[#2E6FF4] "
                        : lesson.Ltype === "exam"
                        ? "bg-[#18B477]"
                        : "bg-transparent"
                    }`}
                  >
                    {`${
                      lesson.Ltype === "section"
                        ? `قسم`
                        : lesson.Ltype === "video"
                        ? "فيديو"
                        : "اختبار"
                    } `}
                  </p>
                </td>
                <td>
                  <p className="text-xs text-lightText font-normal m-auto">
                    {dateFormat(lesson.created_at, "dd / mm / yyyy")}
                  </p>
                </td>
                <td className=" ">
                  <p
                    onClick={() => {
                      setEditMode(true);
                      setEditData(lesson);
                      setEditType(true);
                      setLessonId(lesson);
                    }}
                    className=" m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px] cursor-pointer"
                  >
                    تعديل
                  </p>
                </td>
                <td className=" ">
                  <p
                    onClick={() => {
                      setClose(true);
                      setLessonId(lesson);
                    }}
                    className=" m-auto py-1 px-5 border border-red-500 w-fit rounded-3xl text-black text-[16px] cursor-pointer"
                  >
                    حذف
                  </p>
                </td>
              </tr>
            );
          })}
        {isRejected && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <div>{errMessage}</div>
              </div>
            </td>
          </tr>
        )}
        {/* loading  */}
        {isLoading && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <BeatLoader className="m-auto" color="#2E6FF4" />
              </div>
            </td>
          </tr>
        )}
        {/* data not found  */}
        {state && !isLoading && currentData.length === 0 && (
          <tr>
            <td colSpan={6}>
              <div className="flex justify-center items-center">
                <h1 className="text-lg ">لا توجد بيانات لعرضها</h1>
              </div>
            </td>
          </tr>
        )}
      </tbody>
      <tfoot className="text-center">
        <tr>
          <td colSpan={5}>
            <div className="w-full flex justify-start items-start overflow-auto">
              {state && (
                <Pagination
                  searchText={searchText}
                  data={state}
                  setCurrentDate={setCurrentData}
                  // withoutSearch={true}
                />
              )}
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
