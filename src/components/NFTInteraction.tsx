import React, { useState, useEffect } from 'react';
import { useContractRead, useContractWrite, useWaitForTransaction, useAccount } from 'wagmi';
import { NFTInteractionABI } from '../contracts/NFTInteractionABI';
import { NFTCreatorABI } from '../contracts/NFTCreatorABI';
import { formatDistanceToNow } from 'date-fns';

interface NFTInteractionProps {
  tokenId: number;
  userAddress: string;
}

interface Comment {
  user: string;
  content: string;
  timestamp: number;
}

export const NFTInteraction: React.FC<NFTInteractionProps> = ({ tokenId, userAddress }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);
  const [likeCount, setLikeCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(0);

  const { address } = useAccount();

  // Đọc số lượng likes
  const { data: likesData } = useContractRead({
    address: process.env.NEXT_PUBLIC_NFT_INTERACTION_ADDRESS as `0x${string}`,
    abi: NFTInteractionABI,
    functionName: 'getLikeCount',
    args: [tokenId],
    watch: true,
  });

  // Đọc trạng thái like của user
  const { data: hasLikedData } = useContractRead({
    address: process.env.NEXT_PUBLIC_NFT_INTERACTION_ADDRESS as `0x${string}`,
    abi: NFTInteractionABI,
    functionName: 'hasLiked',
    args: [tokenId, userAddress],
    watch: true,
  });

  // Đọc comments
  const { data: commentData } = useContractRead({
    address: process.env.NEXT_PUBLIC_NFT_INTERACTION_ADDRESS as `0x${string}`,
    abi: NFTInteractionABI,
    functionName: 'getComments',
    args: [tokenId],
    watch: true,
  });

  // Gửi transaction like/unlike
  const { write: toggleLike } = useContractWrite({
    address: process.env.NEXT_PUBLIC_NFT_INTERACTION_ADDRESS as `0x${string}`,
    abi: NFTInteractionABI,
    functionName: 'toggleLike',
  });

  // Gửi transaction thêm comment
  const { write: addComment } = useContractWrite({
    address: process.env.NEXT_PUBLIC_NFT_INTERACTION_ADDRESS as `0x${string}`,
    abi: NFTInteractionABI,
    functionName: 'addComment',
  });

  // Đọc trạng thái follow (New)
  const { data: followStatusData } = useContractRead({
    address: process.env.NEXT_PUBLIC_NFT_CREATOR_ADDRESS as `0x${string}`,
    abi: NFTCreatorABI,
    functionName: 'checkFollowing',
    args: [address, userAddress],
    enabled: !!address && !!userAddress,
    watch: true,
  });

  // Đọc số lượng follower (New)
  const { data: followersData } = useContractRead({
    address: process.env.NEXT_PUBLIC_NFT_CREATOR_ADDRESS as `0x${string}`,
    abi: NFTCreatorABI,
    functionName: 'getFollowerCount',
    args: [userAddress],
    enabled: !!userAddress,
    watch: true,
  });

  // Function để follow/unfollow (New)
  const { write: toggleFollow } = useContractWrite({
    address: process.env.NEXT_PUBLIC_NFT_CREATOR_ADDRESS as `0x${string}`,
    abi: NFTCreatorABI,
    functionName: 'toggleFollow',
  });

  useEffect(() => {
    if (likesData !== undefined) setLikeCount(Number(likesData));
    if (hasLikedData !== undefined) setHasLiked(Boolean(hasLikedData));
    if (Array.isArray(commentData)) {
      // Map data from struct with named properties
      const mapped = commentData.map((c: any) => ({
        user: c.user as string, // Access user by property name
        content: c.content as string, // Access content by property name
        // Store timestamp as received from contract (in seconds)
        timestamp: Number(c.timestamp),
      }));
      setComments(mapped);
    }
    // New: Update follow state and follower count
    if (followStatusData !== undefined) {
      setIsFollowing(Boolean(followStatusData));
    }
    if (followersData !== undefined) {
      setFollowerCount(Number(followersData));
    }
  }, [likesData, hasLikedData, commentData, followStatusData, followersData]);

  const handleLike = async () => {
    try {
      toggleLike?.({ args: [tokenId] });
    } catch (err) {
      console.error('Like error:', err);
    }
  };

  // New: Handle follow button click
  const handleFollow = async () => {
    if (toggleFollow && userAddress) {
      toggleFollow({ args: [userAddress] });
    }
  };

  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    try {
      addComment?.({ args: [tokenId, comment] });
      setComment('');
    } catch (err) {
      console.error('Comment error:', err);
    }
  };

  return (
    <div className="p-6 w-full bg-[#343444] rounded-lg">
      {/* Like Section */}
      <div className="flex items-center space-x-2 mb-4">
        <button
          onClick={handleLike}
          className={`p-2 rounded-full ${
            hasLiked ? 'text-[#E250E5]' : 'text-[#8A8AA0]'
          } hover:bg-[#444455]`}
        >
          <svg
            className="w-6 h-6"
            fill={hasLiked ? 'currentColor' : 'none'}
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
        <span className="text-[#8A8AA0]">{likeCount} likes</span>
        
        {/* Follow Button moved here */}
        {userAddress && address && userAddress !== address && (
          <div className="flex items-center space-x-2 ml-4">
            <button
              onClick={handleFollow}
              className={`px-4 py-2 rounded-lg ${
                isFollowing 
                  ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                  : 'bg-[#E250E5] text-white hover:bg-[#FF60F5]'
              }`}
            >
              {isFollowing ? 'Unfollow' : 'Follow'}
            </button>
            <span className="text-[#8A8AA0]">{followerCount} followers</span>
          </div>
        )}
      </div>

      {/* Comments Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Comments</h3>

        {/* Comment Form */}
        <form onSubmit={handleComment} className="flex space-x-2">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 p-2 border border-[#555566] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E250E5] bg-[#444455] text-white placeholder-gray-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#E250E5] text-white rounded-lg hover:bg-[#FF60F5]"
          >
            Post
          </button>
        </form>

        {/* Comment List */}
        <div className="space-y-3">
          {comments.map((c, index) => (
            <div key={index} className="p-3 bg-[#444455] rounded-lg">
              <div className="flex justify-between items-start">
                <span className="font-medium text-white">
                  {c.user ? `${c.user.slice(0, 6)}...${c.user.slice(-4)}` : 'Unknown User'}
                </span>
                <span className="text-sm text-[#8A8AA0]">
                  {/* Check for valid timestamp and convert to milliseconds for formatting */}
                  {typeof c.timestamp === 'number' && !isNaN(c.timestamp) ?
                    formatDistanceToNow(new Date(c.timestamp * 1000), { // Convert to milliseconds here
                      addSuffix: true,
                    })
                    : 'Invalid Date'
                  }
                </span>
              </div>
              <p className="mt-1 text-[#8A8AA0]">{c.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
