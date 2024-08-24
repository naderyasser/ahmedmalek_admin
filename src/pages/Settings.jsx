import React from "react";

import Pagination from "../components/Pagination";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";
const Settings = () => {
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
    <div>
      {/* <Table /> */}
      <Pagination />
    </div>
  );
};

export default Settings;
