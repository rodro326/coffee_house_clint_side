import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import NavIcon from "../NavBar/NavIcon";

const Main = () => {
    return (
        <div>
            <NavIcon></NavIcon>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;