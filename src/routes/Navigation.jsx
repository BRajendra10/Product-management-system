import React from 'react'
import { Routes, Route } from "react-router";
import Right from '../components/Right';
import AddProduct from '../screens/AddProduct';
import Products from '../screens/Products';

function Navigation() {
  return (
    <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/add" element={<AddProduct />} />
    </Routes>
  )
}

export default Navigation