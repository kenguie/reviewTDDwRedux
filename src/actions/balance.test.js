import * as constants from './constants';
import * as actions from './balance';

// An action is an object but what we’re really testing is the dynamic action creators that make these actions 
// Action creator is a function that returns the action with a specific type based on what we pass as arguments to the action creator function

// first action creator sets the balance
it('creates an action to set the balance', () => {
  const balance = 0; 
  const expectedAction = { type: constants.SET_BALANCE, balance };
  
  expect(actions.setBalance(balance)).toEqual(expectedAction);
})