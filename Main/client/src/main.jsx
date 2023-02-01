import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Main components
import App from "./App.jsx";
import Prototype from "./Prototype.jsx";
import ErrorPage from "./error-page.jsx";

//Testing components
// import HomeTest from "./test/HomeTest.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/prototype",
    element: <Prototype/>,
    errorElement: <ErrorPage />,
  },


  //Test routes below (comment out after tests)
  // {
  //   path: "/test",
  //   element: <HomeTest/>,
  //   errorElement: <ErrorPage />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
