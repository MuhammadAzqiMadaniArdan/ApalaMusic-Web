import React from "react";
import { FaCog, FaBook, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-57 bg-blue-400 text-white flex flex-col justify-between rounded-2xl p-4 m-5">
      <div>
        <h1 className="text-2xl font-bold mb-5 text-center">APALA</h1>
        <hr className="w-45 mb-5" />
        <nav className="flex flex-col gap-6">
          <Link to="/dashboard" className="flex items-center gap-3 font-semibold text-lg">
            <FaHome /> Dashboard
          </Link>
          <Link to="/all-course" className="flex items-center gap-3 font-semibold text-lg">
            <FaBook /> All Course
          </Link>
          <a href="#" className="flex items-center gap-3 font-semibold text-lg">
            <FaBook /> My Course
          </a>
        </nav>
      </div>
      <div className="mb-4">
        <a href="#" className="flex items-center gap-3 font-semibold text-lg">
          <FaCog /> Setting
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
