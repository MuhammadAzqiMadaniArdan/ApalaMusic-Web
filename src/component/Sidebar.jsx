import React from "react";
import { FaCog, FaBook, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-blue-400 text-white flex flex-col justify-between rounded-2xl p-4 m-5">
  <div className="text-center">
    <h1 className="text-2xl font-bold mb-5">APALA</h1>
        <hr className="w-full mx-auto mb-5 border-b-2 border-white" />
    <nav className="flex flex-col gap-6">
      <Link to="/dashboard" className="flex items-center gap-3 font-semibold text-lg justify-center">
        <FaHome 
        size={25}
        /> Dashboard
      </Link>
      <Link to="/all-course" className="flex items-center gap-3 font-semibold text-lg justify-center">
        <FaBook size={22}/> All Course
      </Link>
      <a href="/mycourse" className="flex items-center gap-3 font-semibold text-lg justify-center">
        <FaBook size={22}/> My Course
      </a>
    </nav>
  </div>
  <div className="mb-4 text-center">
    <a href="#" className="flex items-center gap-3 font-semibold text-lg justify-center">
      <FaCog /> Setting
    </a>
  </div>
</div>

  );
}

export default Sidebar;
