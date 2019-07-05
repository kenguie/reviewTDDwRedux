import balanceReducer from './balance'; // assume this exists already to write the test as always, it will faile but then we'll create the component
import * as constants from '../actions/constants'; // going back to the action constants here

describe('balanceReducer', () => {
  it('sets a balance', () => {
    const balance = 10;

    expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance })).toEqual(balance); // undefined is the initial val, then replaced by new value
  })

  it('deposits into the balance', () => {
    const deposit = 10;
    const initialState = 5;

    expect(balanceReducer(initialState, { type: constants.DEPOSIT, deposit })).toEqual(deposit + initialState);
  })

  it('withdraws from the balance', () => {
    const withdraw = 10;
    const initialState = 25;

    expect(balanceReducer(initialState, { type: constants.WITHDRAW, withdraw })).toEqual(initialState - withdraw);
  })
})