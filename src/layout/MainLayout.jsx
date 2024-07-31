import React from "react";
import { Outlet } from "react-router-dom";
import NavBarAnt from "../component/organisms/navBar/NavBarAnt";

const MainLayout = () => {
  return (
    <div>
        <Outlet />
        <NavBarAnt />
    </div>
  )
  
};

export default MainLayout;
