import React from 'react';
import { shallow } from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather';


describe('CurrentWeather', () => {
  it('should render a current weather section', () => {
    const current = shallow(<CurrentWeather />);

    expect(current.find('.current-weather')).toBeDefined();
  });

  it('should render a city', () => {
    const current = shallow(<CurrentWeather />);

    expect(current.find('.city')).toBeDefined();
  });

  it('should render a date', () => {
    const current = shallow(<CurrentWeather />);

    expect(current.find('.date-wrapper')).toBeDefined();
  });

  it('should render a conditions section', () => {
    const current = shallow(<CurrentWeather />);

    expect(current.find('.conditions-wrapper')).toBeDefined();
  });

  it('should render a temperature section', () => {
    const current = shallow(<CurrentWeather />);

    expect(current.find('.high-low-wrapper')).toBeDefined();
  });

  it('should render a search component', () => {
    const current = shallow(<CurrentWeather />);

    expect(current.find('.search')).toBeDefined();
  });
});
