import Gas from '../Gas/Gas';
import Balance from '../Balance/Balance';
import AddressSearchBar from '../AddressSearchBar/AddressSearchBar';
import ethereum from '../util/ethereum';

import React from 'react';
import './Dashboard.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.lookUpENS = this.lookUpENS.bind(this);
        this.state = { ens: ''}
    }

    handleChange(event) {
        this.setState( {ens : event.target.value})
    }

    lookUpENS() {
        ethereum.getEthAddress(this.state.ens)
            .then(response => this.props.changeAddress(response))
            .catch(err => {
                this.setState({address: 'There Was An Error Searching Your ENS. Please Try Again'})
                console.log(err)
            });
    }

    render() {
        return(
            <div>
                <div>
                    <AddressSearchBar handleChange = {this.handleChange} lookUpENS = {this.lookUpENS} address = {this.props.address}/>
                </div>
                <div className="row">
                    <div className="column"> <Balance address = {this.props.address} /> </div>
                    <div className="column"> <Gas/> </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;