import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const initialState = { user: "", isLoading: false, apiUrl: "https://eu" };

export const signin = createAsyncThunk("signIn", async (args) => {
  let formdata = new FormData();
  formdata.append("username", args.username);
  formdata.append("password", args.password);

  let bodyContent = formdata;
  try {
    let reqOptions = {
      url: `https://${Cookies.get(
        "website"
      )}.e3lanotopia.software/api/th/login`,
      method: "POST",
      data: bodyContent,
    };
    let response = await axios.request(reqOptions);
    return response.data;
  } catch (err) {
    return console.log(err.message);
  }
});
export const previousCourse = createAsyncThunk(
  "previousCourse",
  async (args) => {
    try {
      const res = await axios.get(
        `https://${Cookies.get(
          "website"
        )}.e3lanotopia.software/api/th/swap_with_previous_lesson/${args}`
      );

      return res.data;
    } catch (err) {
      return err.message;
    }
  }
);
export const nextCourse = createAsyncThunk("nextCourse", async (args) => {
  try {
    const res = await axios.get(
      `https://${Cookies.get(
        "website"
      )}.e3lanotopia.software/api/th/swap_with_next_lesson/${args}`
    );

    return res.data;
  } catch (err) {
    return err.message;
  }
});

const usersSlice = createSlice({
  name: "admin",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(signin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(signin.pending, (state, action) => {
      state.isLoading = true;
    });
    // builder.addCase(nextCourse.fulfilled, (state, action) => {
    //   state.isLoading = true;
    //   getAllUsers();
    // });
  },
});

export default usersSlice.reducer;
