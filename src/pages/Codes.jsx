import React, { useEffect, useRef, useState } from "react";
import Title from "../components/Title";
import SearchInput from "../components/SearchInput";
import { UseCodesTable } from "../components/Tables";
import { useDispatch, useSelector } from "react-redux";
import { initCodes } from "../store/statsSlice";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Codes = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [isSend, setIsSend] = useState(false);

  const handelInit = (e) => {
    e.preventDefault();
    setIsSend(true);
    dispatch(
      initCodes({
        value: codePrice.current.value,
        num: codeCount.current.value,
      })
    ).then(() => {
      codeCount.current.value = "";
      codePrice.current.value = "";
      setIsSend(false);
      console.log(state.url, Cookies.get("website"));
    });
  };
  const codePrice = useRef(null);
  const codeCount = useRef(null);

  const state = useSelector((state) => state.stats.initCode);

  const navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get("user") === undefined) {
      Cookies.set("user", "true");
      Cookies.set("website", "ahmedmalekacademy");
    }
    if (Cookies.get("user") === "false") {
      navigate("/signin");
    }
  }, [navigate]);

  return (
    <div className="p-5 home-screen">
      <div className="border-b border-gray mb-5">
        <Title title={"إنشاء كود"} />
        <form
          onSubmit={handelInit}
          className=" felx-col justify-start items-center my-5 gap-4 md:flex "
        >
          <input
            ref={codePrice}
            placeholder="سعر الكود"
            className="ref bg-lightGray focus:bg-gray w-full mb-3 md:1/4 border focus:border-gray border-lightGray rounded-2xl text-base py-1 px-5 outline-none "
            type="number"
            required
          />
          <input
            ref={codeCount}
            placeholder="عدد الاكواد"
            className="ref bg-lightGray focus:bg-gray border w-full md:1/4 mb-3  focus:border-gray border-lightGray rounded-2xl text-base py-1 px-5 outline-none "
            type="number"
            required
          />
          <div className="  flex-grow md:w-full flex justify-end items-center   ">
            <button
              type="submit"
              className="text-white font-medium text-base cursor-pointer py-2 px-3 gap-3 bg-buttonBlue rounded-full"
            >
              {isSend ? "جاري الإنشاء" : "إنشاء كود"}
            </button>
          </div>
        </form>
        {state && (
          <div className="w-full flex justify-center items-center">
            <a
              href={`https://${Cookies.get("website")}.e3lanotopia.software${
                state.url
              }`}
              // target="_blank"
              download
              className="text-white font-medium text-base cursor-pointer py-2 px-5 gap-3 bg-buttonBlue rounded-full mb-5"
            >
              {`تحميل`}
            </a>
          </div>
        )}
      </div>
      <div>
        <div className="mb-5">
          <Title title={"الأكواد"} />
        </div>

        <div className="w-full md:w-3/4">
          <SearchInput searchText={searchText} setSearchText={setSearchText} />
        </div>

        <div className="mt-5 overflow-x-auto box-shadow">
          <UseCodesTable searchText={searchText} />
        </div>
      </div>
    </div>
  );
};

export default Codes;
