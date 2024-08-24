import React, { useEffect, useRef, useState } from "react";
import Title from "../components/Title";
import { UseLessonsForOneCourse } from "../components/Tables";
import SearchInput from "../components/SearchInput";
import FilterMenu from "../components/FilterMenu";
import { useDispatch, useSelector } from "react-redux";
import { editLesson, getLessons, initLesson } from "../store/statsSlice";
import { useNavigate, useParams } from "react-router-dom";
import Model from "../components/Model";
import { Toaster, toast } from "sonner";
import { BeatLoader } from "react-spinners";
import Cookies from "js-cookie";

const OneCource = () => {
  const param = useParams();

  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [menuSelected, setMenuSelected] = useState("section");
  // const finalMenu =
  //   menuSelected === "قسم"
  //     ? "section"
  //     : menuSelected === "فيديو"
  //     ? "video"
  //     : "exam";

  const menuData = ["section", "video", "exam"];
  const name = useRef(null);
  const videoURL = useRef(null);
  const isLaoding = useSelector((state) => state.stats.isLoading);

  const formHandler = (e) => {
    e.preventDefault();
    const data = {
      name: name.current.value,
      courseId: param.id,
      iframeCode: videoURL.current.value,
      Ltype: menuSelected,
    };

    if (editType) {
      const data = {
        id: lessonId.id,
        data: {
          name: name.current.value,
          iframeCode: videoURL.current.value,
          Ltype: menuSelected,
          lessonTime: lessonId.created_at,
        },
      };
      dispatch(editLesson(data)).then((e) => {
        if (e.payload.success === true) {
          toast.warning("تم التعديل");
          dispatch(getLessons(param.id));
          setEditType(false);
          name.current.value = "";
          videoURL.current.value = "";
        }
      });
    } else {
      dispatch(initLesson(data)).then((e) => {
        if (e.payload.success === true) {
          toast.success("تم الاضافة");
          dispatch(getLessons(param.id));
          name.current.value = "";
          videoURL.current.value = "";
        }
      });
    }
  };

  const [close, setClose] = useState(false);
  const [lessonId, setLessonId] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [deleteName, setDeleteName] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({});
  const [editType, setEditType] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get("user") === undefined) {
      Cookies.set("user", "true");
      Cookies.set("website", "ahmedmalekacademy");
    }
    if (Cookies.get("user") === "false") {
      navigate("/signin");
    }

    if (editMode) {
      name.current.value = editData.name;
      videoURL.current.value = editData.iframeCode;
      setMenuSelected(editData.Ltype);
      setEditMode(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editMode, navigate]);

  return (
    <div className="home-screen">
      {close && (
        <Model
          deleteMode={true}
          setClose={setClose}
          lessonId={lessonId}
          deleteName={deleteName}
          courseId={param.id}
          deleteLessonMode={true}
        />
      )}
      <div className="mt-5">
        <Title title={param.name} />
      </div>
      <form
        className=" p-5 my-5 mb-8 border-b border-gray "
        onSubmit={formHandler}
      >
        <div className=" flex flex-col md:flex-row justify-start items-center gap-3">
          <input
            required
            ref={name}
            type="text"
            placeholder="الاسم"
            className="block w-full  ml-3 ref bg-lightGray focus:bg-gray md:w-1/4 mb-3  border focus:border-gray border-lightGray rounded-2xl text-base py-1 px-5 outline-none"
          />
          <input
            required
            ref={videoURL}
            type="text"
            placeholder="video URL"
            className="block ref w-full bg-lightGray focus:bg-gray md:w-1/4 mb-3  border focus:border-gray border-lightGray rounded-2xl text-base py-1 px-5 outline-none"
          />
        </div>
        <div className="flex justify-between items-center">
          <FilterMenu
            data={menuData}
            title={"النوع"}
            editMode={editMode}
            editData={editData}
            selected={menuSelected}
            setAcadimcYearChoosed={setMenuSelected}
          />

          <button
            disabled={isLaoding}
            type="submit"
            className="text-white font-medium text-base cursor-pointer py-2 px-3 gap-3 bg-buttonBlue rounded-full"
          >
            {isLaoding ? (
              <BeatLoader color="#fff" />
            ) : editType ? (
              "تعديل"
            ) : (
              "إنشاء"
            )}
          </button>
        </div>
      </form>
      <Toaster position="top-center" richColors />
      <div className="w-full md:w-3/4">
        <SearchInput searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div className="mt-5 overflow-x-auto box-shadow">
        <UseLessonsForOneCourse
          searchText={searchText}
          id={param.id}
          setClose={setClose}
          setLessonId={setLessonId}
          setEditMode={setEditMode}
          setEditData={setEditData}
          setEditType={setEditType}
        />
      </div>
    </div>
  );
};

export default OneCource;
