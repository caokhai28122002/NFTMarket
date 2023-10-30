import { ethers } from "hardhat";

async function main() {
  const NFTMarket = await ethers.deployContract("NFTMarket");
  await NFTMarket.waitForDeployment();

  console.log(`NFT Market deployed to ${NFTMarket.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
