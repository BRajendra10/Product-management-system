import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addProduct } from '../features/ProductsSlice';

function AddProduct() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const HandleClick = (e) => {
    e.preventDefault()
    const newProduct = { title, image, category, price };
    dispatch(addProduct(newProduct));
  }

  return (
    <div className="w-full h-full flex justify-center items-center bg-gradient-to-br from-red-100 to-red-300">
      <div className="w-[30rem] rounded-xl shadow-xl bg-white p-5 flex flex-col gap-5">
        <h1 className="text-2xl font-bold text-center text-green-700 mb-2">Add / Edit Product</h1>
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Title</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Enter product title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Image URL</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Paste image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Category</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Enter category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Price</label>
            <input
              type="number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              min="0"
            />
          </div>
          <button
            className="w-full py-3 mt-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
            onClick={HandleClick}
          >
            Add / Edit Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct