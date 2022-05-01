import React from "react";

class ConnectWalletButton extends React.Component {
    render() {
        return (
        <div>
            <button onClick = {this.props.connectWalletHandler} >Connect Wallet</button>
        </div>
        )
        };
}

export default ConnectWalletButton;