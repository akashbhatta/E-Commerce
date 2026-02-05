import React, { useEffect, useState } from 'react'
import ProductCard from '../components/products/ProductCard'
import { useCart } from '../hooks/useCart';
import categoriesData from '../data/categories';
import CategoryTab from '../components/products/CategoryTab';
import SearchProduct from '../components/products/SearchProduct';
import { useSearchParams } from 'react-router-dom';
import ProductRange from '../components/products/ProductRange';
import FilterByRating from '../components/products/FilterByRating';



export default function Productspage() {

  const { items, loading } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(5);

  console.log("minRating", minRating);
  console.log("maxRating", maxRating);


  useEffect(() => {
    if (search) {
      setSearchParams({ search });
    } else {
      setSearchParams({});
    }
  }, [search, setSearchParams]);

  const filterItems = items.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  console.log("filtered items", filterItems);


  function getProductRating(product) {
    let rating = 0;
    if (product.rating) {
      if (typeof product.rating === 'object') {
        rating = product.rating.rate || 0;
      } else {
        rating = parseFloat(product.rating) || 0;
      }
    }
    if (rating === 0) {
      const seed = product.id * 7919;
      rating = ((seed % 25) / 10) + 2.5; // 2.5 - 5.0
    }
    return rating;
  }

  function productRangeFilter(filterItems) {
    if (!minValue && !maxValue) return filterItems;
    return filterItems.filter((product) => {
      const min = minValue ? parseFloat(minValue) : 0;
      const max = maxValue ? parseFloat(maxValue) : Infinity;
      return product.price >= min && product.price <= max;
    });
  }

  function ratingFilter(items) {
    const minR = minRating ?? 0;
    const maxR = maxRating ?? 5;
    return items.filter(p => {
      const r = getProductRating(p);
      return r >= minR && r <= maxR;
    });
  }

  const finalFilteredItems = productRangeFilter(filterItems);
  const finalFilteredItemsWithRating = ratingFilter(finalFilteredItems);


  if (loading) {
    return <div className="text-center py-16">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            All Products
          </h1>
          
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed mb-6">
            Discover our curated collection of premium products
          </p>

          <div className="mb-6">
            <SearchProduct setSearch={setSearch} search={search} />
            <ProductRange setMaxValue={setMaxValue} setMinValue={setMinValue}/>
            
            
            <FilterByRating setMinRating={setMinRating} setMaxRating={setMaxRating}/>

          </div>
          
          <div className="flex flex-wrap justify-center mb-6">
            <CategoryTab CategoryName="all" key="all" setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
            {
              categoriesData.map((category) => {
                return <CategoryTab CategoryName={category} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} key={category}/>;  
              })
            }
          </div>
          
          <div className="w-32 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-sm"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {finalFilteredItemsWithRating.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  )
}