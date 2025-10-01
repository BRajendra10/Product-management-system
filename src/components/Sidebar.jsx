import React from 'react'
import { NavLink } from "react-router-dom"
import { FiHome, FiPlusSquare, FiEdit, FiSettings, FiUser } from "react-icons/fi"

function Sidebar() {
    return (
        <div className="w-full h-screen flex flex-col bg-white shadow-lg rounded-xl">
            <div className="w-full h-fit px-7 py-3">
                <h1 className="text-2xl text-orange-500 font-bold uppercase tracking-wide">Haptic</h1>
            </div>

            <div className="w-full h-full p-4 flex flex-col justify-between gap-6">
                <ul className="w-full flex flex-col gap-2">
                    <NavLink
                        className={({ isActive }) =>
                            `flex items-center gap-3 w-full p-3 rounded-lg transition ${isActive ? "bg-orange-100 text-orange-600 font-semibold" : "hover:bg-gray-100 text-gray-700"
                            }`
                        }
                        to="/"
                    >
                        <FiHome /> Overview
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `flex items-center gap-3 w-full p-3 rounded-lg transition ${isActive ? "bg-orange-100 text-orange-600 font-semibold" : "hover:bg-gray-100 text-gray-700"
                            }`
                        }
                        to="/add"
                    >
                        <FiPlusSquare /> Add Product
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `flex items-center gap-3 w-full p-3 rounded-lg transition ${isActive ? "bg-orange-100 text-orange-600 font-semibold" : "hover:bg-gray-100 text-gray-700"
                            }`
                        }
                        to="/edit"
                    >
                        <FiEdit /> Edit Product
                    </NavLink>
                </ul>

                <ul className="w-full flex flex-col gap-2 border-t">
                    <NavLink
                        className={({ isActive }) =>
                            `flex items-center gap-3 w-full p-3 rounded-lg transition ${isActive ? "bg-orange-100 text-orange-600 font-semibold" : "hover:bg-gray-100 text-gray-700"
                            }`
                        }
                        to="/settings"
                    >
                        <FiSettings /> Settings
                    </NavLink>
                </ul>

            </div>

            {/* User Profile Section */}
            <div className="w-full p-4 bg-gradient-to-r from-orange-50 to-orange-100 flex items-center gap-4 shadow-lg">
                <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="User Avatar"
                    className="w-13 h-13 rounded-full object-cover border-4 border-orange-300 shadow"
                />
                <div className="flex flex-col">
                    <h2 className="text-lg font-bold text-gray-800 m-0">Rajendra</h2>
                    <span className="text-sm text-gray-500">rajendra@email.com</span>
                </div>
            </div>

        </div>
    )
}

export default Sidebar