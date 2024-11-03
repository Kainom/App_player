import React from "react";
import "react-toastify/dist/ReactToastify.css";

export const ToastSuccess = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
  style: { backgroundColor: "#2E7D32", color: "#ffffff" }, // Custom success color
};

export const ToastFailure = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
  style: { backgroundColor: "#F44336", color: "#ffffff" }, // Custom error color
};
