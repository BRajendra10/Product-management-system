import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { deleteProduct } from '../features/ProductsSlice';


function Product({ data }) {
    const dispatch = useDispatch();

    return (
        <div
            className="flex bg-white shadow-lg rounded-xl overflow-hidden transition-transform h-[18rem]"
            key={data?.id}
        >
            <div className="w-3/5 h-full">
                <img
                    src={data?.image}
                    alt={data?.title}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="w-2/5 flex flex-col justify-between p-6 bg-gradient-to-br from-gray-50 to-gray-200">
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">{data?.title}</h3>
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs mb-4">
                        {data?.category}
                    </span>
                    <div className="text-lg font-semibold text-green-700 mb-4">
                        ₹{data?.price.toLocaleString()}
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition text-sm">
                        Edit
                    </button>
                    <button
                        className="flex-1 px-3 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition text-sm"
                        onClick={() => dispatch(deleteProduct(data.id))}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product