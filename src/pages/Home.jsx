import React, { useEffect, useState } from "react";

import Title from "../components/Title";
import Stats from "../components/Stats";
import { UseHomeTable } from "../components/Tables";
import SearchInput from "../components/SearchInput";

import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Home = () => {
  const [searchText, setSearchText] = useState("");

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
    <div className="p-5 home-screen ">
      <div></div>
      <div className="">
        {/* title */}
        <div className="mb-5">
          <Title title={"آخر الإحصائيات"} />
        </div>
        {/* الاحصائيات */}
        <Stats />
      </div>

      {/* title */}
      <div className="mb-5">
        <Title title={"آخر عمليات الشراء"} />
      </div>
      {/* الجدول */}
      <SearchInput searchText={searchText} setSearchText={setSearchText} />
      <div className="  overflow-x-auto box-shadow mt-5">
        <UseHomeTable searchText={searchText} />
      </div>
    </div>
  );
};

export default Home;
