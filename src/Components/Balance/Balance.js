import avalanche from '../util/avalanche';

import React from 'react';
import ethLogo from '../../Assets/eth-diamond-purple@2x.png';
import avaxLogo from '../../Assets/Avalanche_AVAX_RedWhite.png';
import './Balance.css';
import ethereum from '../util/ethereum';

class Balance extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      ethBalance : '',
      avaxBalance : ''
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    avalanche.getAVAXBalance(this.props.address).then(response => this.setState({avaxBalance: response}));
    ethereum.getEthBalance(this.props.address).then(response => this.setState({ethBalance: response}));
  }

  render() {
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <th>  </th>
              <th>Balance</th>
            </tr>
            
            <tr>
              <td> <span> <img className='logo' src= {ethLogo} alt = ''/> </span> </td>
              <td> {this.state.ethBalance} </td>
            </tr>

            <tr>
              <td> <span> <img className='logo' src= {avaxLogo} alt = ''/></span> </td>
              <td> {this.state.avaxBalance} </td>
            </tr>

            <tr>
              <td>  </td>
              <td> <button onClick={this.onClick}> Get Balance </button> </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default Balance;
