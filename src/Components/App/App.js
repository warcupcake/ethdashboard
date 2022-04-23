import logo from './eth-diamond-purple@2x.png'
import './App.css';
import Gas from '../Gas/Gas';
import Address from '../Address/Address';
import AvaxBalance from '../AvaxBalance/AvaxBalance';


function App() {

  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Address />
      <AvaxBalance />
      <Gas />
    </header>
  </div>
  );
}

export default App;
