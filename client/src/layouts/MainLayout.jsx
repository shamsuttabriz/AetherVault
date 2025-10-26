import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 mt-16 overflow-y-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
