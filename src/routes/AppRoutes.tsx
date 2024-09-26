import React from "react";
import { Route,Routes } from "react-router-dom";
import Payment from "../pages/Payment";
import Pay from "../pages/Pay";


 const  AppRoutes :React.FunctionComponent = () =>{
    return (
      <Routes>
        <Route path="/" element={<h1>Hello, World!</h1>} />
        <Route path="/pay" element={<Pay/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/payment" element={<Payment/>} ></Route>
      </Routes>
    );
}   


export default AppRoutes;