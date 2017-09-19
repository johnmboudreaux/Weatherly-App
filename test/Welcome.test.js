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
  it('should render an input with a class of lcation-search', () => {
    const welcome = shallow(<Welcome />);

    expect(welcome.find('.location-search')).toBeDefined()
  });

  it('should render a button with a class of sub-btn', () => {
    const welcome = shallow(<Welcome />);

    expect(welcome.find('.sub-btn')).toBeDefined()
  });
});
