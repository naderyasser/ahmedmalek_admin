import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editCourse, initCourse } from "../store/statsSlice";
import FilterMenu from "./FilterMenu";
import { getAllCourses } from "../store/usersSlice";
import { Toaster, toast } from "sonner";
import { BeatLoader } from "react-spinners";
import Cookies from "js-cookie";

const CourseModel = ({ setOpenModel, editMode, editData, setEditMode }) => {
  const [choosed, setChoosed] = useState("");
  const [err, setErr] = useState(false);
  const final =
    choosed === "الاول الثانوي"
      ? "1"
      : choosed === "الثاني الثانوي"
      ? "2"
      : choosed === "الرابع الثانوي"
      ? "4"
      : choosed === "الثالث الثانوي" && "3";

  const dispatch = useDispatch();
  const name = useRef(null);
  const price = useRef(null);
  const bannerUrl = useRef(null);
  const category = useRef(null);

  const isLoading = useSelector((state) => state.stats.isLoading);

  const menuData =
    Cookies.get("website") === "thanawionline"
      ? ["الاول الثانوي", "الثاني الثانوي", "الثالث الثانوي", "الرابع الثانوي"]
      : ["الاول الثانوي", "الثاني الثانوي", "الثالث الثانوي"];
  const iniHandler = (e) => {
    e.preventDefault();
    const data = {
      name: name.current.value,
      academicYear: final,
      academicSection: "nothing",
      price: price.current.value,
      bannerUrl: bannerUrl.current.value,
      category: category.current.value,
    };

    if (choosed === "") {
      setErr(true);
    } else {
      if (editMode) {
        const data = {
          id: editData.id,
          data: {
            name: name.current.value,
            academic_year:
              choosed === "الاول الثانوي"
                ? "1"
                : choosed === "الثاني الثانوي"
                ? "2"
                : choosed === "الثالث الثانوي"
                ? "3"
                : choosed === "الرابع الثانوي" && "4",
            academic_section: editData.academic_section,
            price: price.current.value,
            is_free: true,
            banner_url: bannerUrl.current.value,
            category: category.current.value,
          },
        };
        dispatch(editCourse(data)).then((e) => {
          if (e.payload.success === true) {
            dispatch(getAllCourses());
            setOpenModel(false);
            toast.warning("تم التعديل");
            // setEditMode(false);
          }
        });
      } else {
        dispatch(initCourse(data)).then((e) => {
          name.current.value = "";
          price.current.value = "";
          bannerUrl.current.value = "";
          toast.success("تم الاضافة");
          if (e.payload.success === true) {
            dispatch(getAllCourses());
          }
        });
      }
    }
  };
  useEffect(() => {
    if (editMode) {
      name.current.value = editData.name;
      price.current.value = editData.price;
      bannerUrl.current.value = editData.banner_url;
      category.current.value = editData.category;
    }
  }, [editMode]);

  return (
    <div
      className="flex flex-col justify-center items-center absolute top-0 left-0 w-screen h-screen  
     "
    >
      <div className="min-w-96 rounded-md bg-white min-h-52 flex flex-col justify-center items-center gap-5 p-5 z-30   ">
        <h1 className="text-3xl text-darkGray">
          {editMode ? "تعديل الكورس" : "اضافة كورس"}
        </h1>
        <Toaster position="top-center" richColors />
        <form onSubmit={iniHandler} className="flex flex-col gap-4">
          <input
            ref={name}
            placeholder="اسم الكورس"
            className="input w-full block"
            type="text"
            required
          />
          <input
            ref={price}
            placeholder="السعر"
            className="input w-full block"
            type="number"
            min={1}
            required
          />
          <input
            ref={bannerUrl}
            placeholder="URL الصورة المصغرة"
            className="input w-full block"
            type="text"
            required
          />
          <input
            ref={category}
            placeholder="القسم"
            className="input w-full block"
            type="text"
            required
          />
          <div className="flex justify-between items-center">
            <FilterMenu
              data={menuData}
              title={"السنة الدراسية"}
              selected={editMode ? editData.academic_year : ""}
              setAcadimcYearChoosed={setChoosed}
            />
            {err && <p className="text-red-400">اختر السنة الدراسية</p>}
          </div>
          <button
            type="submit"
            className={`text-white font-medium text-base cursor-pointer py-2 px-4 gap-3 
        bg-light-blue-700
             hover:bg-darckBlue transition-all rounded-full`}
          >
            {isLoading ? (
              <BeatLoader color="#fff" />
            ) : editMode ? (
              "تعديل كورس"
            ) : (
              "اضافة كورس"
            )}
          </button>
        </form>
      </div>
      <div
        onClick={() => {
          setOpenModel(false);
          setEditMode(false);
          name.current.value = "";
          price.current.value = "";
          bannerUrl.current.value = "";
          setChoosed("");
        }}
        className="absolute top-0 left-0 w-screen h-screen bg-black opacity-30 z-20 "
      ></div>
    </div>
  );
};

export default CourseModel;
