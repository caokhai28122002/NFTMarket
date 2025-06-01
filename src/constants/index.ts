// Contract Addresses
export const NFTMarketAddress = process.env.NEXT_PUBLIC_NFT_MARKET_ADDRESS || "0x5FbDB2315678afecb367f032d93F642f64180aa3";
export const NFTInteractionAddress = process.env.NEXT_PUBLIC_NFT_INTERACTION_ADDRESS || "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
export const NFTCreatorAddress = process.env.NEXT_PUBLIC_NFT_CREATOR_ADDRESS || "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
export const NFTWishlistAddress = process.env.NEXT_PUBLIC_NFT_WISHLIST_ADDRESS || "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

// Pinata Configuration
export const PINATA_IPFS_URL = process.env.NEXT_PUBLIC_PINATA_IPFS_URL || "https://gateway.pinata.cloud/ipfs/";
export const PINATA_API_KEY = process.env.NEXT_PUBLIC_PINATA_API_KEY || "";
export const PINATA_SECRET_API_KEY = process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY || "";
export const PINATA_SECRET_GATEWAY_TOKEN = process.env.NEXT_PUBLIC_PINATA_GATEWAY_TOKEN || "";

// Contract ABIs
import { NFTInteractionABI } from "../contracts/NFTInteractionABI";
import { NFTCreatorABI } from "../contracts/NFTCreatorABI";
import { NFTWishlistABI } from "../contracts/NFTWishlistABI";

export { NFTInteractionABI, NFTCreatorABI, NFTWishlistABI };

// Error Messages
export const ERROR_MESSAGES = {
  CONNECT_WALLET: "Please connect your wallet to continue",
  INSUFFICIENT_BALANCE: "Insufficient balance to complete the transaction",
  TRANSACTION_FAILED: "Transaction failed. Please try again",
  NETWORK_ERROR: "Network error. Please check your connection",
};

// UI Constants
export const UI_CONSTANTS = {
  MAX_PRICE: 1000000, // Maximum price in wei
  MIN_PRICE: 0.0001, // Minimum price in ETH
  ITEMS_PER_PAGE: 12,
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  SUPPORTED_IMAGE_TYPES: ["image/jpeg", "image/png", "image/gif"],
};
