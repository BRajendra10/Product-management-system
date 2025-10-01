import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Product from '../components/Product';
import { getProducts } from '../features/ProductsSlice';

import { FiSearch } from "react-icons/fi";

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Get unique categories for filter dropdown
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  // Filter and search logic
  const filteredProducts = products.filter(product => {
    const matchesQuery = product.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = filter === "All" || product.category === filter;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-red-100 to-red-300 overflow-y-scroll">
      <div className="sticky top-0 bg-white w-full h-[4.4rem] flex justify-between items-center p-4">
        <div className="w-[25rem] flex bg-red-100 rounded-lg overflow-hidden">
          <button
            className="p-2 flex justify-center items-center"
            onClick={() => setQuery("")}
            aria-label="Clear search"
          >
            {query ? "X" : <FiSearch />}
          </button>
          <input
            type="search"
            name="search"
            id="search"
            className="flex-1 px-2 py-3 outline-none bg-transparent"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <select
          name="filter"
          id="filter"
          className="p-2 bg-red-200 rounded-lg"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-2 overflow-y-scroll">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Product key={product.id} data={product} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-10">
            No products found.
          </div>
        )}
      </div>
    </div>
  )
}

export default Products