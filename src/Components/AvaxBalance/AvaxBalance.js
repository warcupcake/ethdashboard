import avalanche from '../util/avalanche';
import React from 'react';

class AvaxBalance extends React.Component{
  constructor(props) {
    super(props);
    this.state = { address: '0x720b43Cb2AD865EAe6c0ADc23898FBf91A0B0A02'};
    // address is hardcoded
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    avalanche.getAddress(this.state.address).then(response => this.setState({balance: response}));
  }

  render() {
    return(
      <div>
        <button onClick={this.onClick}>Clicky</button>
      </div>
    );
  }
}

export default AvaxBalance;
