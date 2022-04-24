import React from "react";
import './AddressSearchBar.css'
import ethereum from '../util/ethereum';

class AddressSearchBar extends React.Component {

    render() {
        return(
            <div>
                <div className = "AddressBar">
                    <input placeholder='Enter ENS Here' onChange={this.props.handleChange}/>
                </div>
                <button onClick={this.props.lookUpENS}>Look Up Your Address</button>
                <p>{this.props.address}</p>
            </div>
        )
    }
}

export default AddressSearchBar
