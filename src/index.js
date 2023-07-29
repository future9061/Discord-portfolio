import React, { Suspense, lazy } from "react";
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
import Loading from "./pages/Loading";

const LazyApp = lazy(() => import("./App"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyApp />
      </Suspense>
    ),
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
