/* eslint-disable eqeqeq */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const initialState = {
  users: [],
  err: null,
  courses: [],
  oneUser: {},
  userCourses: [],
  isLoading: false,
  isRejected: false,
  message: "",
  notifications: [],
  notificationsCount: "",
};

export const getNotifications = createAsyncThunk(
  "getNotifications",
  async () => {
    try {
      const res = await axios.get(
        `https://${Cookies.get(
          "website"
        )}.e3lanotopia.software/api/th/get_all_notificashen`
      );
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
  try {
    const res = await axios.get(
      `https://${Cookies.get(
        "website"
      )}.e3lanotopia.software/api/th/get_all_users`
    );
    return res.data;
  } catch (err) {
    return err.message;
  }
});

export const getAllCourses = createAsyncThunk("getAllCources", async () => {
  try {
    const res = await axios.get(
      `https://${Cookies.get(
        "website"
      )}.e3lanotopia.software/api/th/get_all_courses`
    );
    return res.data;
  } catch (err) {
    return err.message;
  }
});

export const SearchByYearSectionLocation = createAsyncThunk(
  "SearchByYearSectionLocation",
  async (args) => {
    try {
      const res = await axios.get(
        `https://${Cookies.get(
          "website"
        )}.e3lanotopia.software/api/th/get_users/${args.year}/${args.section}/${
          args.location
        }`
      );
      return res.data;
    } catch (err) {
      console.log(err.message);
    }
  }
);
export const getOneUser = createAsyncThunk("searchOneUser", async (args) => {
  try {
    const res = await axios.get(
      `https://${Cookies.get(
        "website"
      )}.e3lanotopia.software/api/th/get_user_data/${args.email}`
    );
    return res.data;
  } catch (err) {
    return err.message;
  }
});
export const getUserCourses = createAsyncThunk("userCourses", async (args) => {
  try {
    const res = await axios.get(
      `https://${Cookies.get(
        "website"
      )}.e3lanotopia.software/api/th/get_user_courses/${args}`
    );
    return res.data;
  } catch (err) {
    return err.message;
  }
});

export const getNotificationsCount = createAsyncThunk(
  "getNotificationsCount",
  async () => {
    try {
      const res = await axios.get(
        `https://${Cookies.get(
          "website"
        )}.e3lanotopia.software/api/th/count_unread_notificashen`
      );
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);
export const deleteUser = createAsyncThunk("deleteUser", async (args) => {
  try {
    const res = await axios.get(
      `https://${Cookies.get(
        "website"
      )}.e3lanotopia.software/api/th/delete_user/${args}`
    );
    return res.data;
  } catch (err) {
    return err.message;
  }
});
export const editUser = createAsyncThunk("editUser", async (args) => {
  try {
    const res = await axios.post(
      `https://${Cookies.get(
        "website"
      )}.e3lanotopia.software/api/th/edit_user/${args.id}`,
      args.data
    );
    return res.data;
  } catch (err) {
    return err.message;
  }
});
export const changePassword = createAsyncThunk(
  "changePassword",
  async (args) => {
    try {
      const res = await axios.post(
        `https://${Cookies.get(
          "website"
        )}.e3lanotopia.software/api/th/change_password/${args.id}`,
        args.data
      );
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);
export const sentNotification = createAsyncThunk(
  "sentNotification",
  async (args) => {
    try {
      const res = await axios.post(
        `https://${Cookies.get(
          "website"
        )}.e3lanotopia.software/api/th/send_notification/${args.id}`,
        args.data
      );
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);
export const deleteUserCourse = createAsyncThunk(
  "sentNotification",
  async (args) => {
    try {
      const res = await axios.post(
        `https://${Cookies.get(
          "website"
        )}.e3lanotopia.software/api/th/delete_enrolment`,
        args
      );
      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNotificationsCount.fulfilled, (state, action) => {
      state.notificationsCount = action.payload;
    });
    builder.addCase(getNotifications.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getNotifications.fulfilled, (state, action) => {
      state.isLoading = false;
      state.notifications = action.payload;
    });
    builder.addCase(getAllUsers.pending, (state, action) => {
      state.isRejected = false;
      state.isLoading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.isRejected = false;
      state.users = action.payload;
      state.isLoading = false;
      if (state.users === "Network Error") {
        state.isRejected = true;
        state.message = "مشكلة بالانترنت";
      }
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.isRejected = true;
      state.message = action.payload;
    });
    builder.addCase(SearchByYearSectionLocation.fulfilled, (state, action) => {
      state.users = action.payload;
      if (state.users === "Network Error") {
        state.isRejected = true;
        state.message = "مشكلة بالانترنت";
      }
    });
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      state.courses = action.payload;
      state.isLoading = false;
      if (state.courses === "Network Error") {
        state.isRejected = true;
        state.message = "مشكلة بالانترنت";
      }
    });
    builder.addCase(getAllCourses.pending, (state) => {
      state.isRejected = false;
      state.isLoading = true;
    });
    builder.addCase(getAllCourses.rejected, (state, action) => {
      state.isRejected = true;
      state.message = action.payload;
    });
    builder.addCase(getOneUser.fulfilled, (state, action) => {
      state.oneUser = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getOneUser.pending, (state, action) => {
      state.isRejected = false;
      state.isLoading = true;
    });
    builder.addCase(getOneUser.rejected, (state, action) => {
      state.isRejected = true;
      state.message = action.payload;
    });
    builder.addCase(getUserCourses.fulfilled, (state, action) => {
      state.isRejected = false;
      state.isLoading = false;
      state.userCourses = action.payload;
    });
    builder.addCase(deleteUserCourse.fulfilled, (state, action) => {
      state.isRejected = false;
      state.isLoading = false;
    });
    builder.addCase(deleteUserCourse.pending, (state, action) => {
      state.isRejected = false;
      state.isLoading = true;
    });
  },
});

export default usersSlice.reducer;
