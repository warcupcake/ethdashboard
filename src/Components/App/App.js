import logo from '../../Assets/eth-diamond-purple@2x.png'
import './App.css';
import Dashboard from '../Dashboard/Dashboard';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Dashboard/>
      
      </header>
    </div>
  );
}

export default App;
