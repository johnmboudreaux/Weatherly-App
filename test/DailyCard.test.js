import React from 'react';
import { shallow, mount } from 'enzyme';
import DailyCard from '../lib/DailyCard';


describe('DailyCard', () => {
  const card = {
    date: {
      weekday: 'Monday',
      monthname: 'Junish',
      day: '99th'
    },
    icon: 'cloudy',
    icon_url: 'http://www.lowepro.com/assets/img/series/Flipside_II_camera_backpack.jpg',
    high: '30',
    low: '99',
  }
  it('should render a date', () => {
    const hourly = shallow(<DailyCard cardObject={card}/>);

    expect(hourly.find('.day-of')).toBeDefined();
  });

  it('should render an icon status', () => {
    const hourly = shallow(<DailyCard cardObject={card}/>);

    expect(hourly.find('.hour-icon-status')).toBeDefined();
  });

  it('should render an icon', () => {
    const hourly = shallow(<DailyCard cardObject={card}/>);

    expect(hourly.find('.hour-icon')).toBeDefined();
  });
  it('should render high temp', () => {
    const hourly = shallow(<DailyCard cardObject={card}/>);

    expect(hourly.find('.daily-high')).toBeDefined();
  });
  it('should render low temp', () => {
    const hourly = shallow(<DailyCard cardObject={card}/>);

    expect(hourly.find('.daily-low')).toBeDefined();
  });
});
