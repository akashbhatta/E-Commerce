import React from 'react'

function SearchProduct({setSearch}) {
    function onType(event){
        setSearch(event.target.value);
    }
    
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex items-center justify-center mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="bg-white border border-gray-200 rounded-full h-10 w-64 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
          onChange={onType}
          aria-label="Search products"
        />
    </form>
  )
}

export default SearchProduct