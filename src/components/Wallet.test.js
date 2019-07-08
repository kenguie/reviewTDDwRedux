import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet.js';

describe('wallet', () => {
  const mockDeposit = jest.fn();
  const mockWithdrawal = jest.fn();
  const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdrawal };
  const wallet = shallow(<Wallet {...props} />);

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  })

  it('displays the balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
  })

  it('creates input to deposit to or withdraw from the balance', () => {
    expect(wallet.find('.input-wallet').exists()).toBe(true);
  })

  describe('when the user types into the wallet input', () => {
    const userBalance = '25'

    beforeEach(() => {
      wallet.find('.input-wallet')
        .simulate('change', { target: { value: userBalance }});
    })

    it('updates the local wallet balance in `state` and converts it to a number', () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance));
    })

    describe('and the user wants to make a deposit', () => {
      beforeEach(() => wallet.find('.btn-deposit').simulate('click'));

      it('dispatches the `deposit()` it recieves from props with local balance', () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance));
      })
    })

    describe('and the user wants to make a withdrawal', () => {
      beforeEach(() => wallet.find('.btn-withdrawal').simulate('click'));

      it('dispatches the `withdrawal()` it receives from props with local balance', () => {
        expect(mockWithdrawal).toHaveBeenCalledWith(parseInt(userBalance));
      })
    })
  })
})