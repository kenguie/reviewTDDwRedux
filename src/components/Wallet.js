import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Wallet extends Component {
  render() {
    return(
      <div>
        <h3 className='balance'>Wallet balance: { this.props.balance }</h3>
      </div>
    )
  }
}

// export default connect(state => { balance: state }, null)(Wallet); // connect( map state to props part, null - second part not needed atm)
// looks like this isn't needed atm because we are passing the balance down through props