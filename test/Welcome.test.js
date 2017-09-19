import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from '../lib/Welcome';

describe('Welcome', () => {
  it('should render an h1 to the page', () => {
    const welcome = shallow(<Welcome />);

    expect(welcome.find('h1')).toBeDefined()
  });

  it('should render a span with class avatar', () => {
    const welcome = shallow(<Welcome />);

    expect(welcome.find('.avatar')).toBeDefined()
  });
});
