import React, { useState, useEffect } from 'react';
import { useContractRead, useContractWrite, useAccount } from 'wagmi';
import { NFT_WISHLIST_ABI } from '../constants';
import { NFTWishlistAddress } from '../constants';

interface NFTWishlistProps {
  tokenId: number;
}

export const NFTWishlist: React.FC<NFTWishlistProps> = ({ tokenId }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const { address } = useAccount();

  // Đọc trạng thái wishlist
  const { data: wishlistStatus } = useContractRead({
    address: NFTWishlistAddress as `0x${string}`,
    abi: NFT_WISHLIST_ABI,
    functionName: 'checkInWishlist',
    args: [address, tokenId],
    enabled: !!address,
  });

  // Function để thêm/xóa khỏi wishlist
  const { write: toggleWishlist } = useContractWrite({
    address: NFTWishlistAddress as `0x${string}`,
    abi: NFT_WISHLIST_ABI,
    functionName: 'toggleWishlist',
    args: [tokenId],
  });

  useEffect(() => {
    if (wishlistStatus !== undefined) {
      setIsInWishlist(Boolean(wishlistStatus));
    }
  }, [wishlistStatus]);

  const handleWishlist = () => {
    if (toggleWishlist) {
      toggleWishlist();
    }
  };

  return (
    <button
      onClick={handleWishlist}
      className={`p-2 rounded-full ${
        isInWishlist ? 'text-red-500' : 'text-gray-500'
      } hover:bg-gray-100`}
    >
      <svg
        className="w-6 h-6"
        fill={isInWishlist ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
}; 