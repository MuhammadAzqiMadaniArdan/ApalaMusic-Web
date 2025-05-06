import React from "react";
import Sidebar from "../component/Sidebar";
import AvatarDashboard from "../assets/avatar-dashboard.png";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function Dashboard() {
    return (
        <div className="flex h-screen bg-blue-100">
            <Sidebar />
            <div className="flex-1 p-6 overflow-auto">
                <div className="bg-white rounded-2xl p-6 shadow-md h-full">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-4xl font-bold text-blue-900 ml-5">Dashboard</h1>
                        <div className="flex items-center gap-2">
                            <img
                                src="https://i.pravatar.cc/40"
                                alt="Profile"
                                className="w-10 h-10 rounded-full"
                            />
                            <span className="font-semibold">John Doe</span>
                        </div>
                    </div>
                    <a className="mb-5 text-gray-500" href="#">Dashboard /</a>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gray-100 p-6 rounded-2xl mt-6 mb-6 flex shadow-lg justify-around items-center"
                    >
                        <div>
                            <h3 className="text-3xl font-bold">Hi John Doe!</h3>
                            <p className="text-xl text-gray-600">mau latihan apa hari ini?</p>
                            <br />
                            <p className="text-black-400 font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aperiam expedita earum odit cum libero sint deserunt similique atque ex.</p>
                        </div>
                        <img
                            src={AvatarDashboard}
                            alt="Character"
                            className="w-60 h-60"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-blue-400 p-6 rounded-2xl flex shadow-lg justify-between items-center"
                    >
                        <div className="text-white">
                            <h3 className="text-xl font-bold mb-2">Kelas</h3>
                            <a
                                href="#"
                                className="mt-5 inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl font-semibold shadow-lg transition duration-300 hover:bg-blue-600 hover:text-white"
                            >
                                Lihat Selanjutnya
                                <FaArrowRight />
                            </a>                      
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="bg-white w-72 h-50 rounded-2xl"
                        ></motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="bg-white w-72 h-50 rounded-2xl"
                        ></motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.0 }}
                            className="bg-white w-72 h-50 rounded-2xl"
                        ></motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
