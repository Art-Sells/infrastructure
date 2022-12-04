require('@nomiclabs/hardhat-waffle');
// require("@nomicfoundation/hardhat-toolbox");
// require("@nomicfoundation/hardhat-chai-matchers");
// require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/gggo19mnHz_XBOdJ1OAssJR0Ce7m5geP',
      accounts: ['129bda14294af0291dd4d6ec3b2e85b6ce93a591bd88cac017afa3b2cef6df21']
    }
  }
}
