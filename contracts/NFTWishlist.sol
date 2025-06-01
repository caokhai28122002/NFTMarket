// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTWishlist is Ownable {
    // Mapping từ người dùng đến danh sách NFT trong wishlist
    mapping(address => uint256[]) public userWishlists;
    
    // Mapping để kiểm tra xem NFT có trong wishlist của người dùng không
    mapping(address => mapping(uint256 => bool)) public isInWishlist;

    // Event khi thêm/xóa NFT khỏi wishlist
    event WishlistToggled(address indexed user, uint256 indexed tokenId, bool isAdded);

    // Function để thêm/xóa NFT khỏi wishlist
    function toggleWishlist(uint256 tokenId) external {
        bool currentStatus = isInWishlist[msg.sender][tokenId];
        
        if (!currentStatus) {
            // Thêm vào wishlist
            userWishlists[msg.sender].push(tokenId);
        } else {
            // Xóa khỏi wishlist
            uint256[] storage wishlist = userWishlists[msg.sender];
            for (uint i = 0; i < wishlist.length; i++) {
                if (wishlist[i] == tokenId) {
                    wishlist[i] = wishlist[wishlist.length - 1];
                    wishlist.pop();
                    break;
                }
            }
        }

        isInWishlist[msg.sender][tokenId] = !currentStatus;
        emit WishlistToggled(msg.sender, tokenId, !currentStatus);
    }

    // Function để lấy danh sách NFT trong wishlist của người dùng
    function getWishlist(address user) external view returns (uint256[] memory) {
        return userWishlists[user];
    }

    // Function để kiểm tra xem NFT có trong wishlist của người dùng không
    function checkInWishlist(address user, uint256 tokenId) external view returns (bool) {
        return isInWishlist[user][tokenId];
    }
} 