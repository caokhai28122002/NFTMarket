// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTCreator is Ownable {
    // Mapping từ người dùng đến danh sách creator họ đang follow
    mapping(address => address[]) public userFollowings;
    
    // Mapping từ creator đến số lượng follower
    mapping(address => uint256) public creatorFollowers;
    
    // Mapping để kiểm tra xem người dùng đã follow creator chưa
    mapping(address => mapping(address => bool)) public isFollowing;

    // Event khi có người follow/unfollow
    event FollowToggled(address indexed follower, address indexed creator, bool isFollowing);

    // Function để follow/unfollow creator
    function toggleFollow(address creator) external {
        require(creator != address(0), "Invalid creator address");
        require(creator != msg.sender, "Cannot follow yourself");

        bool currentFollowStatus = isFollowing[msg.sender][creator];
        
        if (!currentFollowStatus) {
            // Follow
            userFollowings[msg.sender].push(creator);
            creatorFollowers[creator]++;
        } else {
            // Unfollow
            address[] storage followings = userFollowings[msg.sender];
            for (uint i = 0; i < followings.length; i++) {
                if (followings[i] == creator) {
                    followings[i] = followings[followings.length - 1];
                    followings.pop();
                    break;
                }
            }
            creatorFollowers[creator]--;
        }

        isFollowing[msg.sender][creator] = !currentFollowStatus;
        emit FollowToggled(msg.sender, creator, !currentFollowStatus);
    }

    // Function để lấy danh sách creator mà người dùng đang follow
    function getFollowings(address user) external view returns (address[] memory) {
        return userFollowings[user];
    }

    // Function để lấy số lượng follower của một creator
    function getFollowerCount(address creator) external view returns (uint256) {
        return creatorFollowers[creator];
    }

    // Function để kiểm tra xem người dùng có đang follow creator không
    function checkFollowing(address follower, address creator) external view returns (bool) {
        return isFollowing[follower][creator];
    }
} 