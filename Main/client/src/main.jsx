import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home.jsx";
import HomeTest from "./test/Home-Test.jsx";
import About from "./About.jsx";
import ErrorPage from "./error-page";;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About/>,
  },


  //Test routes below (comment out after tests)
  {
    path: "/test",
    element: <HomeTest/>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
