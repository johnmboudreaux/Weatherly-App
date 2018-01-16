import React from 'react';
import { shallow } from 'enzyme';
import HourlyCard from '../lib/HourlyCard';


describe('HourlyCard', () => {
  const card ={
    FCTTIME: {
      civil: '2:00'
    },
    icon: 'cloudy',
    icon_url: 'http://www.lowepro.com/assets/img/series/Flipside_II_camera_backpack.jpg',
    temp:'30'
  };
  it('should render a time', () => {
    const hourly = shallow(<HourlyCard cardObject={card}/>);

    expect(hourly.find('.hour-time')).toBeDefined();
  });

  it('should render an icon status', () => {
    const hourly = shallow(<HourlyCard cardObject={card}/>);

    expect(hourly.find('.hour-icon-status')).toBeDefined();
  });

  it('should render an icon', () => {
    const hourly = shallow(<HourlyCard cardObject={card}/>);

    expect(hourly.find('.hour-icon')).toBeDefined();
  });
  it('should render temp', () => {
    const hourly = shallow(<HourlyCard cardObject={card}/>);

    expect(hourly.find('.hour-temp')).toBeDefined();
  });
});
