import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";


function Navbar() {
    return (
        <div className="w-full h-[4.3rem] flex justify-end items-center shadow-lg px-4">

            <div className="w-fit h-fit flex items-center gap-5">
                <button className="relative text-xl p-2 hover:bg-orange-100 rounded-full">
                    <IoMdNotificationsOutline />

                    <div className="absolute w-2 h-2 rounded-full top-2 right-2 bg-orange-400"></div>
                </button>

                <div className="w-11 h-11 rounded-full">
                    <img className="w-full h-full object-cover rounded-full" src="/public/male-avtar.avif" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar