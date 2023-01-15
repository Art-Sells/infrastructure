import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Main components
import Home from "./Home.jsx";
import Prototype from "./Prototype.jsx";
import ErrorPage from "./error-page.jsx";

//Testing components
import HomeTest from "./test/HomeTest.jsx";
import About from "./About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/prototype",
    element: <Prototype/>,
    errorElement: <ErrorPage />,
  },


  //Test routes below (comment out after tests)
  {
    path: "/test",
    element: <HomeTest/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
