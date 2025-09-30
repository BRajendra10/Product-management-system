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
console.log(newProduct);
    dispatch(addProduct(newProduct)); 
  }

  return (
    <div className="w-full h-full flex justify-center items-center bg-red-200">
      {/* This is going to be a form where products will be added and updated */}
      <div className="w-[30rem] h-fit flex flex-col gap-3 bg-green-200 p-3">
        <h1 className="text-xl font-semibold text-center">Add / Edit Product</h1>

        <form action="" className="w-full flex flex-col gap-2" >

          <input type="text" className="p-2 border rounded-lg" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" className="p-2 border rounded-lg" placeholder="Enter image" value={image} onChange={(e) => setImage(e.target.value)} />
          <input type="text" className="p-2 border rounded-lg" placeholder="Enter Category" value={category} onChange={(e) => setCategory(e.target.value)} />
          <input type="text" className="p-2 border rounded-lg" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)} />

          <button className="p-3 mt-4 bg-red-400 rounded-lg" onClick={(e) => HandleClick(e)}>Add / edit product</button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct