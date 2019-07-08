import * as constants from '../actions/constants';
import { read_cookie, bake_cookie } from 'sfcookies';

const BALANCE_COOKIE = 'BALANCE_COOKIE'; // we've named the cookie BALANCE_COOKIE

// setting state to 0 so it's not undefined as default
const balance = (state = 0, action) => {
  let balance;

  switch(action.type) {
    case constants.SET_BALANCE:
      balance = action.balance;
      break;
    case constants.DEPOSIT:
      balance = state + action.deposit;
      break;
    case constants.WITHDRAW:
      balance = state - action.withdraw;
      break;
    default:
      balance =  parseInt(read_cookie(BALANCE_COOKIE)) || state;
  }

  bake_cookie(BALANCE_COOKIE, balance); // we've placed the balance into a cookie called BALANCE_COOKIE before returning the value

  return balance;
} 

export default balance;