import React from "react";
import { Route,Routes } from "react-router-dom";
import Payment from "../pages/Payment";
import Pay from "../pages/Pay";
import NotFound from "../components/NotFound";
import Home from "../pages/Home";

 const  AppRoutes :React.FunctionComponent = () =>{
    return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pay" element={<Pay/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/payment" element={<Payment/>} ></Route>
      </Routes>
    );
}   


export default AppRoutes;