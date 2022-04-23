import Web3 from 'web3';

const providerUrl = 'https://mainnet.infura.io/v3/0adde3650a3c40c3b1140e0e4b8bb4a6' || 'http://localhost:8545';
const web3 = new Web3(providerUrl);

const ethereum = {

  getEthAddress(address) {
    console.log('Getting ethereum address from ENS');
    return web3.eth.ens.getAddress(address);
  },

  getEthGas() {
    console.log('Getting ethereum gas price');
    return web3.eth.getGasPrice().then(response => {
      return Web3.utils.fromWei(response, 'GWEI')
    });
  }
}

export default ethereum;
