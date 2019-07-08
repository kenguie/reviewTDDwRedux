import { FETCH_BITCOIN } from './constants';

export const fetchBitcoin = () => {
  return dispatch => {
    return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')  // each one of these layers returned a promise
      .then(response => response.json()) // each one of these layers returned a promise
      .then(json => dispatch({ type: FETCH_BITCOIN, bitcoin: json })); 
  }
}