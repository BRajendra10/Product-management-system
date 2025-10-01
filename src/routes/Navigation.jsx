import React from 'react'
import { Routes, Route } from "react-router";
import Right from '../components/Right';
import AddProduct from '../screens/AddProduct';
import Products from '../screens/Products';
import { FiAlertCircle } from "react-icons/fi"

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/add" element={<AddProduct />} />
      <Route
        path="*"
        element={
          <div className="w-full h-full flex flex-col justify-center items-center bg-red-50">
            <FiAlertCircle className="text-orange-400 mb-4" size={64} />
            <h1 className="text-6xl font-bold text-orange-500 mb-2">404</h1>
            <span className="text-lg text-gray-600 mb-6">Page not found</span>
            <a
              href="/"
              className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
            >
              Go Home
            </a>
          </div>
        }
      />
    </Routes>
  )
}

export default Navigation