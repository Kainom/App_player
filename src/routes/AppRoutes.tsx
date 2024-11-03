import React from "react";
import { Route, Routes } from "react-router-dom";
import Payment from "../pages/Payment";
import Pay from "../pages/Pay";
import NotFound from "../components/NotFound";
import LoginRegister from "../pages/LoginRegister";
import Home from "../pages/Home";

const AppRoutes: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginRegister />} />
      <Route path="/pay" element={<Pay />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/payment" element={<Payment />}></Route>
      <Route
        path="/perfil"
        element={<h1 className="text-cyan-200">Perfil</h1>}
      />
    </Routes>
  );
};

export default AppRoutes;
