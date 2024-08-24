import { getAllUsers } from "../store/usersSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../components/Title";

import { UseUsersTable } from "../components/Tables";
import SearchInput from "../components/SearchInput";
import { useNavigate } from "react-router-dom";
import Model from "../components/Model";
import { Toaster } from "sonner";
import Cookies from "js-cookie";

const Users = () => {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();
  const admin = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [close, setClose] = useState(false);
  const [userId, setUserId] = useState();

  useEffect(() => {
    if (Cookies.get("user") === undefined) {
      Cookies.set("user", "true");
      Cookies.set("website", "ahmedmalekacademy");
    }
    if (Cookies.get("user") === "false") {
      navigate("/signin");
    }

    dispatch(getAllUsers());
  }, [dispatch, admin, navigate]);

  return (
    <div className="p-5 home-screen ">
      <Toaster position="top-center" richColors />
      {close && (
        <Model
          setClose={setClose}
          deleteMode={true}
          courseId={userId}
          deleteName={false}
          userMode={true}
        />
      )}
      <Title title={"المستخدمين"} />
      <div className="mt-5">
        <SearchInput searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div className="overflow-x-auto box-shadow mt-5">
        <UseUsersTable
          searchText={searchText}
          setClose={setClose}
          setUserId={setUserId}
        />
      </div>
    </div>
  );
};

export default Users;
