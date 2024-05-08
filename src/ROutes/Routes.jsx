import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Register from "../components/Register";
import Login from "../components/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
      ]
    },
  ]);
  export default router