import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Product from '../components/Product';
import { getProducts } from '../features/ProductsSlice';

import { FiSearch } from "react-icons/fi";

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  console.log(products);

  useEffect(() => { // Search featuers
    const array = []
    const data = products.find((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    array.push(data)

    setResult(array);
  }, [query, products])

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  return (
    <div className="w-full h-full">
      {/* Where all products will be shown */}
      <div className="w-full h-[5rem] ">

        <div className="bg-green-200 w-full h-[5rem] flex justify-between items-center p-4">

          <div className="w-[25rem] grid grid-cols-10 bg-red-100 rounded-lg">
            <button className="p-2 flex justify-center items-center" onClick={() => setQuery("")}>
              {query ? "X" :<FiSearch />}
            </button>
            <input type="search" name="search" id="search" className="col-span-9 px-2 py-3" onChange={(e) => setQuery(e.target.value)} />
          </div>

          <select name="filter" id="filter" className="p-2 bg-red-200">
            <option value="Electronics">Electronics</option>
            <option value="Jwelery">Jwelery</option>
          </select>

        </div>

        <div className="w-full h-full grid grid-cols-2 gap-3 p-3">
          {products.map((product) => <Product data={product} />)}
        </div>
      </div>
    </div>
  )
}

export default Products