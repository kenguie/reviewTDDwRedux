import * as constants from '../actions/constants';

// setting state to 0 so it's not undefined as default
const balance = (state = 0, action) => {
  switch(action.type) {
    case constants.SET_BALANCE:
      return action.balance;
    case constants.DEPOSIT:
        return state + action.deposit;
    case constants.WITHDRAW:
        return state - action.withdraw;
    default:
      return state;
  }
} 

export default balance;