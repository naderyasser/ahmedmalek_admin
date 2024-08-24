import React, { useEffect, useState } from "react";
import Title from "../components/Title";

import FilterMenu from "../components/FilterMenu";
import SearchInput from "../components/SearchInput";
import { UseCoursesTable } from "../components/Tables";

import { useLocation, useNavigate } from "react-router-dom";
import CourseModel from "../components/CourseModel";
import Model from "../components/Model";
import { Toaster } from "sonner";
import Cookies from "js-cookie";

const Course = () => {
  const [searchText, setSearchText] = useState("");
  const [acadimcYearChoosed, setAcadimcYearChoosed] = useState("الكل");

  const acadimcYear =
    Cookies.get("website") === "thanawionline"
      ? ["الكل", 1, 2, 3, 4]
      : ["الكل", 1, 2, 3];

  const navigate = useNavigate();
  const { state } = useLocation();
  const [openModel, setOpenModel] = useState(false);
  useEffect(() => {
    if (state) {
      setOpenModel(true);
    }
    if (Cookies.get("user") === undefined) {
      Cookies.set("user", "true");
      Cookies.set("website", "ahmedmalekacademy");
    }
    if (Cookies.get("user") === "false") {
      navigate("/signin");
    }
  }, [navigate, state]);

  const [editMode, setEditMode] = useState(false);
  const [close, setClose] = useState(false);
  const [courseId, setCourseId] = useState("");
  const [editData, setEditData] = useState();

  return (
    <div className="p-5 home-screen">
      {openModel && (
        <CourseModel
          editMode={editMode}
          editData={editData}
          setOpenModel={setOpenModel}
          setEditMode={setEditMode}
        />
      )}
      <Toaster position="top-center" richColors />

      {close && (
        <Model
          setClose={setClose}
          deleteMode={true}
          courseId={courseId}
          deleteCourseMode={true}
        />
      )}

      <Title title="الكورسات" />
      <div className="flex justify-center items-start flex-col gap-3 mt-3">
        <div className="flex justify-center  items-start gap-3 flex-row ">
          <FilterMenu
            title={"السنة الدراسية"}
            data={acadimcYear}
            selected={"الكل"}
            setAcadimcYearChoosed={setAcadimcYearChoosed}
          />
        </div>
        <div className="flex justify-between items-center w-full ">
          <div className="w-1/2 md:w-full">
            <SearchInput
              setSearchText={setSearchText}
              searchText={searchText}
            />
          </div>

          <button
            onClick={() => setOpenModel(true)}
            className="py-2 px-3 gap-3 rounded-full bg-buttonBlue flex justify-center items-center   min-w-28 text-white "
          >
            إضافة كورس
          </button>
        </div>
      </div>
      <div className="mt-5 overflow-x-auto box-shadow">
        <UseCoursesTable
          setClose={setClose}
          searchText={searchText}
          acadimcYearChoosed={acadimcYearChoosed}
          filter={true}
          setCourseId={setCourseId}
          setOpenModel={setOpenModel}
          setEditMode={setEditMode}
          setEditData={setEditData}
        />
      </div>
    </div>
  );
};

export default Course;
