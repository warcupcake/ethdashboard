import logo from './eth-diamond-purple@2x.png'
import './App.css';
import Web3 from 'web3';
import Gas from '../Gas/Gas';
import Address from '../Address/Address';


function App() {
  const providerUrl = 'https://mainnet.infura.io/v3/0adde3650a3c40c3b1140e0e4b8bb4a6' || 'http://localhost:8545';
  const web3 = new Web3(providerUrl);


  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Address ens = {web3.eth.ens}/>
      <Gas />
    </header>
  </div>
  );
}

export default App;
