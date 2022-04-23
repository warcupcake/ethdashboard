import React from 'react';
import './Gas.css'
import etherscan from '../๊Util/etherscan';
import ethLogo from '../App/eth-diamond-purple@2x.png'

class Gas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ethGas : {}
        }
        this.getGasPrices = this.getGasPrices.bind(this);
    }

    getGasPrices() {
        etherscan.getGasOracle().then(response => {
            console.log(response.ProposeGasPrice)
            this.setState({ ethGas: {
                SafeGasPrice : response.SafeGasPrice,
                ProposeGasPrice : response.ProposeGasPrice,
                FastGasPrice : response.FastGasPrice
            }})
        });
    }

    render() {
        return(
            <div>
                <table>
                    <tr>
                        <th> Chain </th> 
                        <th> Gas Price </th>
                    </tr>
                    <tr>
                        <td> <span> <img className='logo' src= {ethLogo}/> </span> <span> Ethereum </span> </td>
                        <td> {this.state.ethGas.ProposeGasPrice} </td>
                    </tr>
                </table>
                <button onClick={this.getGasPrices}> Refresh Gas </button>
            </div>
        )
    }
}

export default Gas;