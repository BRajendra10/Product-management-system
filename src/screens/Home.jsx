import React from 'react'

import Sidebar from '../components/Sidebar'
import Right from '../components/Right'

function Home() {
  return (
    <div className="w-full h-screen">
        <div className="w-full h-screen grid grid-cols-30 gap-2 bg-gray-100">
            <div className="col-span-4 bg-white">
                <Sidebar />
            </div>
            <div className="col-span-26 bg-white">
                <Right />
            </div>
        </div>
    </div>
  )
}

export default Home