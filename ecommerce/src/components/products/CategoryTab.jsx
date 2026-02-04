import React from 'react'

function CategoryTab({ categoryName, setSelectedCategory, selectedCategory }) {

  function handleClick(){
    setSelectedCategory(categoryName);
  }

  const isActive = selectedCategory === categoryName;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={isActive}
      title={`Filter by ${categoryName}`}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isActive ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
    >
      {categoryName}
    </button>
  )
}

export default CategoryTab