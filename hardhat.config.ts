import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
const privateKey = process.env.PRIVATE_WALLET_KEY as string;

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    bnbTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      accounts: [privateKey],
    },
  },

  solidity: "0.8.19",
};

export default config;
