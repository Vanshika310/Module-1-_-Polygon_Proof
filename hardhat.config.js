require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts:  ['469118f2ce4262f230644bb1c2748adb59622272460d2d0a6b10aba8e56d066d'],
    },
    sepolia: {
      url: 'https://ethereum-sepolia.blockpi.network/v1/rpc/public',
      accounts:  ['469118f2ce4262f230644bb1c2748adb59622272460d2d0a6b10aba8e56d066d'],
    },
  },
    // ...
    paths: {
      sources: "./contracts",
      artifacts: "./artifacts",
    },
    // ...
  };
  
