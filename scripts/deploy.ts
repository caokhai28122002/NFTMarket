import { ethers } from "hardhat";

async function main() {
  const NFTMarket = await ethers.deployContract("NFTMarket");
  await NFTMarket.waitForDeployment();

  console.log(`NFT Market deployed to ${NFTMarket.target}`);

  const NFT = await ethers.deployContract("NFT", [NFTMarket.target]);
  await NFT.waitForDeployment();

  console.log(`NFT deployed to ${NFT.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
