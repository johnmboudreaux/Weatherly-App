import React from 'react';
import { mount } from 'enzyme';
import HourlyCards from '../lib/HourlyCards';
import mockData from '../utils/mockData';

describe('HourlyCards', () => {
  const hourlyData = mockData.hourly_forecast.splice(0, 7);
  it('should render hourly cards', () => {
    const sevenHourCards = mount(<HourlyCards
          hourlyCardsArray={hourlyData}
 />);
    expect(sevenHourCards.find('.hourly-cards')).toBeDefined();
    expect(sevenHourCards.find('HourlyCard').length).toEqual(7);
  });
});
