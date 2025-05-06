import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrum, faGuitar } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const courses = [
  { id: 1, name: "DRUM", icon: faDrum, completed: 7, total: 10 },
  { id: 2, name: "PIANO", icon: faDrum, completed: 2, total: 10 },
  { id: 3, name: "GUITAR", icon: faGuitar, completed: 6, total: 10 },
  { id: 4, name: "DRUM", icon: faDrum, completed: 9, total: 10 },
  { id: 5, name: "PIANO", icon: faDrum, completed: 3, total: 10 },
  { id: 6, name: "GUITAR", icon: faGuitar, completed: 8, total: 10 },
];

const MyCoursePage = () => {
  const [activeTab, setActiveTab] = useState("lanjutkan");

  return (
    <div className="flex bg-blue-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto">
        <div className="bg-white rounded-2xl p-6 shadow-md h-full">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-blue-900 ml-5">
              My Course
            </h1>
            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/40"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <span className="font-semibold">John Doe</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center">
            <div className="relative flex bg-blue-200 rounded-full overflow-hidden mb-6 shadow-md w-full max-w-2xl p-1">
              {/* Slider */}
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute top-1 bottom-1 rounded-full bg-white shadow w-1/2"
                animate={{
                  left: activeTab === "lanjutkan" ? "1%" : "49%",
                }}
              />

              <button
                onClick={() => setActiveTab("lanjutkan")}
                className={`flex-1 text-center py-2 text-lg font-bold z-10 rounded-full transition-colors ${
                  activeTab === "lanjutkan"
                    ? "text-blue-900"
                    : "text-blue-500"
                }`}
              >
                Lanjutkan Belajar
              </button>
              <button
                onClick={() => setActiveTab("rencana")}
                className={`flex-1 text-center py-2 text-lg font-bold z-10 rounded-full transition-colors ${
                  activeTab === "rencana"
                    ? "text-blue-900"
                    : "text-blue-500"
                }`}
              >
                Rencana Belajar
              </button>
            </div>
          </div>

          {/* Grid of Courses (No Animation) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course) => {
              const percent = Math.round(
                (course.completed / course.total) * 100
              );
              return (
                <div
                  key={course.id}
                  className="bg-white rounded-3xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-all"
                >
                  <FontAwesomeIcon
                    icon={course.icon}
                    size="4x"
                    className="text-gray-800 mb-4"
                  />
                  <h3 className="text-xl font-extrabold uppercase text-gray-800 mb-2">
                    {course.name}
                  </h3>
                  <p className="text-lg text-gray-700 mb-4 font-bold">
                    {course.completed} dari {course.total} modul selesai
                  </p>
                  <div className="w-full flex items-center gap-2">
                    <div className="flex-1 bg-blue-400 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-800 to-blue-600 h-4 transition-all duration-500"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                    <span className="text-base font-semibold text-gray-700">
                      {percent}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCoursePage;
