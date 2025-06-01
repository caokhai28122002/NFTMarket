import React, { useState, useEffect } from 'react';
import { useContractRead, useContractWrite, useAccount } from 'wagmi';
import { NFTCreatorABI } from '../contracts/NFTCreatorABI';

interface CreatorFollowProps {
  creatorAddress: string;
}

export const CreatorFollow: React.FC<CreatorFollowProps> = ({ creatorAddress }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(0);
  const { address } = useAccount();

  // Đọc trạng thái follow
  const { data: followStatusData } = useContractRead({
    address: process.env.NEXT_PUBLIC_NFT_CREATOR_ADDRESS as `0x${string}`,
    abi: NFTCreatorABI,
    functionName: 'checkFollowing',
    args: [address, creatorAddress],
    enabled: !!address && !!creatorAddress,
    watch: true,
  });

  // Đọc số lượng follower
  const { data: followersData } = useContractRead({
    address: process.env.NEXT_PUBLIC_NFT_CREATOR_ADDRESS as `0x${string}`,
    abi: NFTCreatorABI,
    functionName: 'getFollowerCount',
    args: [creatorAddress],
    enabled: !!creatorAddress,
    watch: true,
  });

  // Function để follow/unfollow
  const { write: toggleFollow } = useContractWrite({
    address: process.env.NEXT_PUBLIC_NFT_CREATOR_ADDRESS as `0x${string}`,
    abi: NFTCreatorABI,
    functionName: 'toggleFollow',
  });

  useEffect(() => {
    if (followStatusData !== undefined) {
      setIsFollowing(Boolean(followStatusData));
    }
    if (followersData !== undefined) {
      setFollowerCount(Number(followersData));
    }
  }, [followStatusData, followersData]);

  const handleFollow = async () => {
    if (toggleFollow) {
      toggleFollow({ args: [creatorAddress] });
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleFollow}
        className={`px-4 py-2 rounded-lg ${
          isFollowing
            ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
      <span className="text-gray-600">{followerCount} followers</span>
    </div>
  );
}; 