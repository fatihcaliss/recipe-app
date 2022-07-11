import React from 'react';
import Header from "../components/header/Header";
import { Navigate, Outlet } from "react-router-dom";



const PrivateRouter = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    return (

        user ?
            <>
                <Header />
                <Outlet />
            </>
            :
            <Navigate to="/" />

    )
}

export default PrivateRouter