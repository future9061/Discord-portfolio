import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Project } from "./pages/Project";
import { Contact } from "./pages/Contact";
import { Setting } from "./pages/Setting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/Home", element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/Skills", element: <Skills /> },
      { path: "/Project", element: <Project /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/Setting", element: <Setting /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
