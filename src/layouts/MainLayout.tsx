import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderPage from "../pages/HeaderPage";

const MainLayout = () => {
    return (
        <div>
            <HeaderPage/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;