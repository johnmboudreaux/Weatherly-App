import React from 'react';
import { mount } from 'enzyme';
import DailyCards from '../lib/DailyCards';
import mockData from '../utils/mcDataDaily';

describe('DailyCards', () => {
  const dailyData = mockData.forecast.simpleforecast.forecastday.splice(0, 10);
  it('should render hourly cards', () => {
    const dailyCards = mount(<DailyCards
          dailyCardsArray={dailyData}
 />);
    expect(dailyCards.find('.daily-cards')).toBeDefined();
    expect(dailyCards.find('DailyCard').length).toEqual(10);
  });
});
