import React from "react";
import './Address.css'
import ethereum from '../util/ethereum';

class Address extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.lookUpENS = this.lookUpENS.bind(this);
        this.state = {address: '', ens: ''}
    }

    handleChange(event) {
        this.setState( {ens : event.target.value})
    }

    lookUpENS() {
        ethereum.getEthAddress(this.state.ens)
            .then(response => this.setState({address: response}))
            .catch(err => {
                this.setState({address: 'There Was An Error Searching Your ENS. Please Try Again'})
                console.log(err)
            });
    }

    render() {
        return(
            <div>
                <div className = "AddressBar">
                    <input placeholder='Enter Address Here' onChange={this.handleChange}/>
                </div>
                <button onClick={this.lookUpENS}>Look Up ENS</button>
                <p>{this.state.address}</p>
            </div>
        )
    }
}

export default Address
