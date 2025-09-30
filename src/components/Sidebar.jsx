import React from 'react'
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-full h-fit flex flex-col gap-2">
        <div className="w-full h-fit p-4">
            <h1 className="text-xl text-orange-400 font-semibold uppercase">Haptic</h1>
        </div>

        <div className="w-full h-fit px-2 py-4 flex flex-col gap-4">
            <ul className="w-full h-fit flex flex-col gap-1">
                <NavLink className="w-full h-fit p-2 hover:bg-gray-200 rounded-lg" to="/">Overview</NavLink>
                <NavLink className="w-full h-fit p-2 hover:bg-gray-200 rounded-lg" to="/add">Add product</NavLink>
                <li className="w-full h-fit p-2 hover:bg-gray-200 rounded-lg ">Add product</li>
                <li className="w-full h-fit p-2 hover:bg-gray-200 rounded-lg ">Update product</li>
                <li className="w-full h-fit p-2 hover:bg-gray-200 rounded-lg ">Edit product</li>
            </ul>

            <ul className="w-full h-fit flex flex-col gap-1">
                <li className="w-full h-fit p-2 hover:bg-gray-200 rounded-lg ">Setings</li>
                <li className="w-full h-fit p-2 hover:bg-gray-200 rounded-lg ">.....</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar