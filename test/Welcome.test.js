import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from '../lib/Welcome.js';

describe('Welcome functionality', () => {
  it('should change state when search input changed', () => {
    const welcome = shallow(<Welcome />);
    const input = welcome.find('input');


    // console.log(welcome.debug());
    expect(welcome.state('value')).toEqual('');

    const event = { target: { value: 'Baton Rouge/Denver' } };

    input.simulate('change', event);

    expect(welcome.state('value')).toEqual('Baton Rouge/Denver');
  });
});
