const hardhat = require("hardhat");

async function main() {

  const NFTMarket = await hardhat.ethers.getContractFactory("NFTMarket");
  const nftMarket = await NFTMarket.deploy();

  console.log("NFTMarket deployed to:", nftMarket.target)

  const NFT = await hardhat.ethers.getContractFactory("NFT");
  await NFT.deploy(nftMarket.target);

}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});
