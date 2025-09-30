import React from 'react'

function Product({data}) {

    return (
    <div className="w-[40rem] h-[20rem] grid grid-cols-2 bg-gray-200 rounded-xl" key={data?.id}>
        <img src={data?.image} alt="" className="col-span-1 h-full object-cover rounded-l-xl" />

        <div className=" rounded-r-xl flex flex-col gap-2 p-2">
            <h3 className="text-xl font-bold">{data?.title}</h3>
            <span>category: {data?.category}</span>
            <b>Price: {data?.price}</b>

            <div className="w-full flex gap-2">
                <button className="px-2 py-1 border rounded-lg">Edit Product</button>
                <button className="px-2 py-1 border rounded-lg">Delete Product</button>
            </div>
        </div>
    </div>
  )
}

export default Product