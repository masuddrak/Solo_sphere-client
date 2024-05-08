import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({children}) => {
    const {user,loading}=useAuth()
    const location=useLocation()
    if(loading){
        return <h1 className="text-4xl font-bold">loading..............</h1>
    }
    if(user){
        return children
    }
  
    return <Navigate to="/login" state={location.pathname} replace={true}></Navigate>
};

export default PrivetRoute;