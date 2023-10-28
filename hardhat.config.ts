const  { HardhatUserConfig } = require("hardhat/config");
require( "@nomicfoundation/hardhat-toolbox");


const config = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      chainId: 1337
    },
    nova: {
      url: "http://blockchainapi.novasquare.vn:12345",
    }
  }
};

module.exports=config;
