import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Register from "../components/Register";
import Login from "../components/Login";
import JobDetails from "../components/JobDetails";
import axios from "axios";
import Addjob from "../Pages/Addjob";
import MypostedJobs from "../Pages/MypostedJobs";
import UpadteJobs from "../components/UpadteJobs";
import PrivetRoute from "../Provider/PrivetRoute";
import MyBids from "../Pages/Mybids";
import MyBidRequests from "../Pages/MyBidRequests";

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
        {
          path:"/job/:id",
          element:<JobDetails></JobDetails>,
          loader:({params})=>axios(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
        },
        {
          path:"/addjob",
          element:<Addjob></Addjob>,
        },
        {
          path:"/mypostedjobs",
          element:<PrivetRoute><MypostedJobs></MypostedJobs></PrivetRoute>,
        },
        {
          path:"/updatejob/:id",
          element:<UpadteJobs></UpadteJobs>,
          loader:({params})=>axios(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
        },
        {
          path:"/mybids",
          element:<MyBids></MyBids>,
        },
        {
          path:"/mybidrequest",
          element:<MyBidRequests></MyBidRequests>,
        },
      ]
    },
  ]);
  export default router