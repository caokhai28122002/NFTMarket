import React, { useState, useEffect } from 'react';
import { useContract, useContractRead } from 'wagmi';
import { NFTMarketABI } from '../contracts/NFTMarketABI';

interface NFTSearchProps {
  onSearch: (results: any[]) => void;
}

export const NFTSearch: React.FC<NFTSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [sortBy, setSortBy] = useState('newest');
  const [category, setCategory] = useState('all');

  const contract = useContract({
    address: process.env.NEXT_PUBLIC_NFT_MARKET_ADDRESS,
    abi: NFTMarketABI,
  });

  // Đọc danh sách NFT từ smart contract
  const { data: marketItems } = useContractRead({
    ...contract,
    functionName: 'fetchMarketItems',
  });

  useEffect(() => {
    if (marketItems) {
      let filteredItems = [...marketItems];

      // Lọc theo từ khóa tìm kiếm
      if (searchTerm) {
        filteredItems = filteredItems.filter(item => 
          item.tokenURI.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Lọc theo khoảng giá
      if (priceRange.min) {
        filteredItems = filteredItems.filter(item => 
          Number(item.price) >= Number(priceRange.min)
        );
      }
      if (priceRange.max) {
        filteredItems = filteredItems.filter(item => 
          Number(item.price) <= Number(priceRange.max)
        );
      }

      // Lọc theo category
      if (category !== 'all') {
        filteredItems = filteredItems.filter(item => 
          item.category === category
        );
      }

      // Sắp xếp kết quả
      switch (sortBy) {
        case 'price-asc':
          filteredItems.sort((a, b) => Number(a.price) - Number(b.price));
          break;
        case 'price-desc':
          filteredItems.sort((a, b) => Number(b.price) - Number(a.price));
          break;
        case 'newest':
          filteredItems.sort((a, b) => Number(b.tokenId) - Number(a.tokenId));
          break;
        case 'oldest':
          filteredItems.sort((a, b) => Number(a.tokenId) - Number(b.tokenId));
          break;
      }

      onSearch(filteredItems);
    }
  }, [searchTerm, priceRange, sortBy, category, marketItems]);

  return (
    <div className="p-4 bg-white rounded-lg shadow space-y-4">
      {/* Search Bar */}
      <div className="flex space-x-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search NFTs..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Price Range */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Price Range</label>
          <div className="flex space-x-2">
            <input
              type="number"
              value={priceRange.min}
              onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
              placeholder="Min"
              className="w-1/2 p-2 border rounded-lg"
            />
            <input
              type="number"
              value={priceRange.max}
              onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
              placeholder="Max"
              className="w-1/2 p-2 border rounded-lg"
            />
          </div>
        </div>

        {/* Sort By */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full p-2 border rounded-lg"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-lg"
          >
            <option value="all">All Categories</option>
            <option value="art">Art</option>
            <option value="music">Music</option>
            <option value="gaming">Gaming</option>
            <option value="photography">Photography</option>
          </select>
        </div>
      </div>
    </div>
  );
}; 