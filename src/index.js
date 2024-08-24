import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// React router dom
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// redux condig
import { store } from "./store/store.js";
import { Provider } from "react-redux";
// Pages
import Home from "./pages/Home";
import Course from "./pages/Course.jsx";
import Users from "./pages/Users.jsx";
import Codes from "./pages/Codes.jsx";

import Analysis from "./pages/Analysis.jsx";
import Exams from "./pages/Exams.jsx";

import PageNotFound from "./pages/PageNotFound.jsx";

import User from "./pages/User.jsx";
import Notifications from "./pages/Notifications.jsx";
import Signin from "./pages/Signin.jsx";
import OneCource from "./pages/OneCource.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Course />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/codes",
        element: <Codes />,
      },
      {
        path: "/exams",
        element: <Exams />,
      },
      {
        path: "/analysis",
        element: <Analysis />,
      },
      {
        path: "/user/:email",
        element: <User />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "onecourse/:id/:name",
        element: <OneCource />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Signin />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
