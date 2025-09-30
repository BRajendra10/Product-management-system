import React from 'react'
import Navbar from './Navbar'
import Navigation from '../routes/Navigation'
import Products from '../screens/Products'

function Right() {
  return (
    <div className="w-full h-fit flex flex-col gap-2">
        {/* Right side of dashboard */}
        <Navbar />

        <div className="w-full h-[50rem] bg-red-200">
            <Navigation />
        </div>
    </div>
  )
}

export default Right