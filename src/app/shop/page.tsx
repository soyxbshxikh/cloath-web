'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { FaSearch } from 'react-icons/fa';
import formatPrice from '@/data/formatPrice';

export default function ShopPage() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 16000]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    
    filterProducts(term, priceRange);
  };
  
  const handlePriceChange = (value: [number, number]) => {
    setPriceRange(value);
    filterProducts(searchTerm, value);
  };
  
  const filterProducts = (term: string, price: [number, number]) => {
    const filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(term.toLowerCase()) || 
                             product.description.toLowerCase().includes(term.toLowerCase());
      const matchesPrice = product.price >= price[0] && product.price <= price[1];
      
      return matchesSearch && matchesPrice;
    });
    
    setFilteredProducts(filtered);
  };
  
  const clearFilters = () => {
    setPriceRange([0, 16000]);
    setSearchTerm('');
    setFilteredProducts(products);
  };
  
  return (
    <div className="container mx-auto py-4 xs:py-6 sm:py-8 md:py-12 px-2 xs:px-4 sm:px-6">
      <h1 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-3 xs:mb-4 sm:mb-6 md:mb-8">Shop All Products</h1>
      
      {/* Top Filters Section */}
      <div className="bg-white rounded-lg shadow-md p-3 xs:p-4 sm:p-6 mb-4 xs:mb-6 sm:mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
          {/* Search Box */}
          <div>
            <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-1 xs:mb-2 sm:mb-4">Search</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-3 xs:px-4 py-1.5 xs:py-2 sm:py-3 pl-8 xs:pl-10 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 text-xs xs:text-sm sm:text-base"
                value={searchTerm}
                onChange={handleSearch}
              />
              <FaSearch className="absolute left-2 xs:left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs xs:text-sm" />
            </div>
          </div>
          
          {/* Price Range */}
          <div>
            <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-1 xs:mb-2 sm:mb-4">Price Range</h3>
            <div className="flex justify-between mb-1 xs:mb-2 text-xs xs:text-sm sm:text-base">
              <span>{formatPrice(priceRange[0])}</span>
              <span>{formatPrice(priceRange[1])}</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="16000" 
              step="1000"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange([priceRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              aria-label="Price range slider"
            />
            <div className="mt-2 xs:mt-3 sm:mt-4 text-right">
              <button
                onClick={clearFilters}
                className="bg-gray-100 text-gray-600 py-1 xs:py-1.5 sm:py-2 px-2 xs:px-3 sm:px-4 rounded-md hover:bg-gray-200 transition-colors text-xs sm:text-sm"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      <div>
        {filteredProducts.length === 0 ? (
          <div className="text-center py-6 xs:py-8 sm:py-12">
            <h3 className="text-base xs:text-lg sm:text-xl font-medium mb-1 xs:mb-2">No products found</h3>
            <p className="text-gray-600 text-xs xs:text-sm sm:text-base">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 