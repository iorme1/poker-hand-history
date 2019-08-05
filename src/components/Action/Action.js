import React, { Component } from 'react';
import './Action.scss';

class Action extends Component {
  state = {
    last_action: null,
    pot_size: 0
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Action;

/*
 street - pos - action => (dropdown showing bet/check/call/raise/fold)

state = {
  last_action:  (bet, call, check, raise)
  pot_size: 0 => this will be recalculated after each action
}

// this will get called if an "amount" input is changed
setPot(amount) {
  this.setState({ pot: this.state.pot + bet}
}
*/
