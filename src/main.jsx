import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Outlet } from "react-router";
import "./App.css";

import Home from "./pages/Home";
import EditUser from "./pages/EditUser";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "user/:id",
        element: <EditUser />,
      },
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
