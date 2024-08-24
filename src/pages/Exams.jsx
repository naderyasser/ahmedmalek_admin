import React, { useEffect, useState } from "react";

import Graph from "../components/Graph";
import Title from "../components/Title";
import SearchInput from "../components/SearchInput";
import { UseExamsTable } from "../components/Tables";
import FilterMenu from "../components/FilterMenu";

import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import QuestionsTabs from "../components/exam/QuestionsTabs";

const Exams = () => {
  const [searchText, setSearchText] = useState("");
  const [acadimcYearChoosed, setAcadimcYearChoosed] = useState("الكل");

  const acadimcYear = ["الكل", 1, 2, 3];

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
      <div className="mb-5">
        <Title title={"متوسط درجات الطلاب"} />
      </div>
      <QuestionsTabs />
      <div className="my-5">
        <Title title={"الإختبارات"} />
      </div>
      <div className="flex justify-start  items-start gap-3 flex-row ">
        <FilterMenu
          title={"السنة الدراسية"}
          data={acadimcYear}
          selected={"الكل"}
          setAcadimcYearChoosed={setAcadimcYearChoosed}
        />
      </div>
      <div className="my-5">
        <SearchInput searchText={searchText} setSearchText={setSearchText} />
      </div>

      <div className="mt-5 overflow-x-auto box-shadow">
        <UseExamsTable
          acadimcYearChoosed={acadimcYearChoosed}
          searchText={searchText}
        />
      </div>
    </div>
  );
};

export default Exams;
