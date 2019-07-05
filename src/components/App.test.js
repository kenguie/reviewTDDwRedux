import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  })

  it('contains a Wallet component', () => {
    // console.log(app.debug()); // way to check what component is actually getting brought in - it's Connect(Wallet)

    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  })
})