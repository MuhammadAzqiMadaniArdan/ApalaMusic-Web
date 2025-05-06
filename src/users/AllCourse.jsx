import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import AvatarAllCourse from '../assets/avatar-all-course.png'
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const AllCourse = () => {
    const data = [
        { name: "PIANO", icon: "🎹" },
        { name: "DRUM", icon: "🥁" },
        { name: "GUITAR", icon: "🎸" },
        { name: "VIOLIN", icon: "🎻" },
        { name: "TRUMPET", icon: "🎺" },
        { name: "SAXOPHONE", icon: "🎷" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const prev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
    };

    const next = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % data.length);
    };

    const getItem = (offset) => {
        const index = (currentIndex + offset + data.length) % data.length;
        return data[index];
    };

    const variants = {
        enter: (dir) => ({
            x: dir > 0 ? 200 : -200,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (dir) => ({
            x: dir > 0 ? -200 : 200,
            opacity: 0,
        }),
    };

    const renderCard = (item, index) => {
        const position = index - 2;
        const isCenter = position === 0;

        const blurClass =
            position === 0 ? "blur-0 opacity-100 z-20" :
                Math.abs(position) === 1 ? "blur-sm z-10" :
                    "blur-lg z-0";

        return (
            <motion.div
                key={`${item.name}-${index}`}
                className={`flex flex-col items-center justify-between bg-white rounded-4xl shadow-md p-3 w-36 h-50 md:w-44 md:h-45 transition-all duration-300 ${blurClass} scale-${isCenter ? "110" : "95"}`}
                layout
                layoutTransition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className={`text-md text-center ${isCenter ? "font-bold" : "text-gray-500"}`}>
                    {item.name}
                </div>
                <button className={`mt-4 text-sm px-3 py-1 rounded-xl font-semibold transition ${isCenter ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-200 text-gray-600"
                    }`}>
                    Selanjutnya
                </button>
            </motion.div>
        );
    };


    return (
        <div className="flex bg-blue-100">
            <Sidebar />
            <div className="flex-1 p-6 overflow-auto">
                <div className="bg-white rounded-2xl p-6 shadow-md h-full">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-4xl font-bold text-blue-900 ml-5">All Course</h1>
                        <div className="flex items-center gap-2">
                            <img
                                src="https://i.pravatar.cc/40"
                                alt="Profile"
                                className="w-10 h-10 rounded-full"
                            />
                            <span className="font-semibold">John Doe</span>
                        </div>
                    </div>
                    <a href="#" className="mb-5 text-gray-500">All Course /</a>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gray-100 rounded-2xl flex shadow-lg justify-around items-center"
                    >
                        <img
                            src={AvatarAllCourse}
                            alt="Character"
                            className="w-75 h-75 mx-10"
                        />
                        <div className="fw-500 mx-20">
                            <h3 className="text-2xl font-bold">Lorem ipsum dolor.</h3>
                            <p className="text-gray-600 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam fugiat dolores commodi nam, perferendis culpa tenetur. Culpa dignissimos at rerum, illo corporis quas alias consequuntur fugiat odit quam a vel?</p>
                            <a
                                href="#"
                                className="mt-5 inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-xl font-semibold shadow-lg transition hover:bg-blue-700 duration-300"
                            >
                                Lihat Selanjutnya
                                <FaArrowRight />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex gap-4 items-center justify-center overflow-hidden w-full"
                        layout
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-4">
                            <button onClick={prev} className="text-xl p-2 rounded-full hover:bg-black hover:text-white">
                                <FaArrowLeft />
                            </button>

                            <div className="flex gap-4 items-center justify-center overflow-hidden h-[300px] w-full">
                                <AnimatePresence variants={variants} initial={false} custom={direction}>
                                    {[getItem(-2), getItem(-1), getItem(0), getItem(1), getItem(2)].map((item, idx) =>
                                        renderCard(item, idx)
                                    )}
                                </AnimatePresence>
                            </div>

                            <button onClick={next} className="text-xl p-2 rounded-full transition duration-700 hover:bg-black hover:text-white">
                                <FaArrowRight />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AllCourse;
