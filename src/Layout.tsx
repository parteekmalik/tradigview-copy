import React from "react";
import Header from "./components/header/header";
import Footer from "./components/fotter/Fotter";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Header />
            <div className="pl-40 p-10 h-[83vh] select-none">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Layout;
