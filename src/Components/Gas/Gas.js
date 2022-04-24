import React from 'react';
import './Gas.css'
import ethereum from '../util/ethereum';
import avalanche from '../util/avalanche';

class Gas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ethGas : '',
            avaxGas : ''
        }
        this.getAllChainGasPrice = this.getAllChainGasPrice.bind(this);
        this.getEthGasPrice = this.getEthGasPrice.bind(this);
        this.getAVAXGasPrice = this.getAVAXGasPrice.bind(this);
    }

    getAllChainGasPrice() {
      this.getEthGasPrice();
      this.getAVAXGasPrice();
    }

    getEthGasPrice() {
        ethereum.getEthGas().then(response => {
          console.log(`ETH Gas from web3.js = ${response}`);
          this.setState( { ethGas : response } );
        })
    }

    getAVAXGasPrice() {
        avalanche.getAVAXGas().then(response => {
          console.log(`AVAX Gas from web3.js = ${response}`);
          this.setState( { avaxGas : response });
        } )
    }

    render() {
        return(
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th> Gas (GWEI) </th>
                    </tr>
                    <tr>
                        <td> {this.state.ethGas} </td>
                    </tr>
                    <tr>
                        <td> {this.state.avaxGas} </td>
                    </tr>
                    <tr>
                        <td> <button onClick={this.getAllChainGasPrice}> Refresh Gas </button> </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Gas;
