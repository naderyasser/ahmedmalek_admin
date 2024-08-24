import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
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
  return <div>PageNotFound</div>;
};

export default PageNotFound;
