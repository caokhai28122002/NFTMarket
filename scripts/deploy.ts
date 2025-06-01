import { ethers } from "hardhat";
import * as fs from "fs";
import * as path from "path";

async function main() {
  console.log("Starting deployment...");

  // Deploy NFTMarket
  console.log("Deploying NFTMarket...");
  const NFTMarket = await ethers.deployContract("NFTMarket");
  await NFTMarket.waitForDeployment();
  console.log("NFTMarket deployed to:", NFTMarket.target);

  // Deploy NFTInteraction
  console.log("Deploying NFTInteraction...");
  const NFTInteraction = await ethers.deployContract("NFTInteraction");
  await NFTInteraction.waitForDeployment();
  console.log("NFTInteraction deployed to:", NFTInteraction.target);

  // Deploy NFTCreator
  console.log("Deploying NFTCreator...");
  const NFTCreator = await ethers.deployContract("NFTCreator");
  await NFTCreator.waitForDeployment();
  console.log("NFTCreator deployed to:", NFTCreator.target);

  // Deploy NFTWishlist
  console.log("Deploying NFTWishlist...");
  const NFTWishlist = await ethers.deployContract("NFTWishlist");
  await NFTWishlist.waitForDeployment();
  console.log("NFTWishlist deployed to:", NFTWishlist.target);

  // Update .env file
  const envPath = path.join(__dirname, "../.env");
  let envContent = "";

  try {
    envContent = fs.readFileSync(envPath, "utf8");
  } catch (error) {
    console.log("Creating new .env file...");
  }

  // Update or add contract addresses
  const updates = {
    "NEXT_PUBLIC_NFT_MARKET_ADDRESS": NFTMarket.target,
    "NEXT_PUBLIC_NFT_INTERACTION_ADDRESS": NFTInteraction.target,
    "NEXT_PUBLIC_NFT_CREATOR_ADDRESS": NFTCreator.target,
    "NEXT_PUBLIC_NFT_WISHLIST_ADDRESS": NFTWishlist.target,
  };

  for (const [key, value] of Object.entries(updates)) {
    const regex = new RegExp(`${key}=.*`, "g");
    if (envContent.match(regex)) {
      envContent = envContent.replace(regex, `${key}=${value}`);
    } else {
      envContent += `\n${key}=${value}`;
    }
  }

  fs.writeFileSync(envPath, envContent);
  console.log("Updated .env file with new contract addresses");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
