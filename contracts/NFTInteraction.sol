// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTInteraction is Ownable {
    struct Comment {
        address user;
        string content;
        uint256 timestamp;
    }

    // Mapping từ tokenId đến danh sách người dùng đã like
    mapping(uint256 => mapping(address => bool)) public likes;
    
    // Mapping từ tokenId đến số lượng likes
    mapping(uint256 => uint256) public likeCount;
    
    // Mapping từ tokenId đến danh sách comments
    mapping(uint256 => Comment[]) public comments;

    // Event khi có người like/unlike
    event LikeToggled(uint256 indexed tokenId, address indexed user, bool isLiked);
    
    // Event khi có comment mới
    event CommentAdded(uint256 indexed tokenId, address indexed user, string content);

    // Function để like/unlike NFT
    function toggleLike(uint256 tokenId) external {
        bool currentLikeStatus = likes[tokenId][msg.sender];
        likes[tokenId][msg.sender] = !currentLikeStatus;
        
        if (!currentLikeStatus) {
            likeCount[tokenId]++;
        } else {
            likeCount[tokenId]--;
        }
        
        emit LikeToggled(tokenId, msg.sender, !currentLikeStatus);
    }

    // Function để thêm comment
    function addComment(uint256 tokenId, string memory content) external {
        require(bytes(content).length > 0, "Comment cannot be empty");
        
        Comment memory newComment = Comment({
            user: msg.sender,
            content: content,
            timestamp: block.timestamp
        });
        
        comments[tokenId].push(newComment);
        emit CommentAdded(tokenId, msg.sender, content);
    }

    // Function để lấy số lượng likes của một NFT
    function getLikeCount(uint256 tokenId) external view returns (uint256) {
        return likeCount[tokenId];
    }

    // Function để kiểm tra xem một người dùng đã like NFT chưa
    function hasLiked(uint256 tokenId, address user) external view returns (bool) {
        return likes[tokenId][user];
    }

    // Function để lấy tất cả comments của một NFT
    function getComments(uint256 tokenId) external view returns (Comment[] memory) {
        return comments[tokenId];
    }
} 