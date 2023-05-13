require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    ganachetestnet: {
      url: process.env.PROVIDER_URL,
      account: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};