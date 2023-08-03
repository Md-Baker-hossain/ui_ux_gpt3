import { createBrowserRouter } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";
import Main from "../layout/Main";
import Header from "../comtainer/header/Header";
import WhatGPT3 from "../comtainer/whatGPT3/WhatGPT3";
import Possibility from "../comtainer/possibility/Possibility";
import Features from "../component/feature/Features";
import Blog from "../comtainer/blog/Blog";
 

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element:<Header></Header>,
        },
        {
            path: "/wgpt",
            element:<WhatGPT3></WhatGPT3>,
        },
        {
            path: "/possibility",
            element:<Possibility></Possibility>,
        },
        {
            path: "/feature",
            element:<Features></Features>,
        },
        {
            path: "/blog",
            element: <Blog></Blog>,
        },
      ],
    },
  ]);

  export default Router
  