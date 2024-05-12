"use client";
import { ToastContainer, cssTransition, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";

export default function Notifications() {
  return (
    <ToastContainer
      className=""
      theme="colored"
      autoClose={1500}
      transition={Slide}
    />
  );
}
