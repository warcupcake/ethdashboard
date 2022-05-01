import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import { useState, useEffect } from 'react';
import ConnectWalletButton from '../ConnectWalletButton/ConnectWalletButton';

function App() {

  const [currentAddress, setCurrentAddress] = useState();

  const checkWalletIsConnected = () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log('Metamask not installed');
      return;
    } else {
      console.log('Metamask is installed');
    }
  }

  const connectWalletHandler = async () => {
    const {ethereum} = window;
    if(!ethereum) {
      console.log('Metamask not installed');
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Found an account! Address: ', accounts[0]);
      setCurrentAddress(accounts[0]);
    } catch (err) {
      console.log(err);
    }
   }

  const changeAddress = (address) => {
    setCurrentAddress(address);
  }

  useEffect(() => {
    checkWalletIsConnected();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <ConnectWalletButton connectWalletHandler = {connectWalletHandler} />
        <Dashboard address = {currentAddress} changeAddress = {changeAddress}/>
      
      </header>
    </div>
  );
}

export default App;
