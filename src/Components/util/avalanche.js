import Web3 from 'web3';

const endpoint = "https://nd-049-118-291.p2pify.com/2f7f20b5526eb03803751679303902d4/ext/bc/C/rpc";
const web3 = new Web3(new Web3.providers.HttpProvider(endpoint));


const avalanche = {

  getAddress(address) {
    console.log(`Getting AVAX balance of ${address}`);
    return web3.eth.getBalance(address).then(response => {
      return Web3.utils.fromWei(response, 'ether')
    });
  }
}
export default avalanche;
