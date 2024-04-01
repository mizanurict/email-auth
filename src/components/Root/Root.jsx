import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Header></Header>
            <div className="text-center my-8">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;