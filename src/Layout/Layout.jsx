import { Outlet } from "react-router-dom";
import Header from "../components/Header";


const Layout = () => {
    return (
        <div >
            <div className="w-4/5 mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;