import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Admin.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Dashboard from "./dashboard/Dashboard";
import Verification from "./verification/verification";
function Admin() {
  return (
    <>
      <Navbar />
      <div className="admin_container">
        <Sidebar />
        <div className="contents">
          <Routes>
            <Route path="" element={<Dashboard />} />
            <Route path="dashboard" element={<Verification />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Admin;
