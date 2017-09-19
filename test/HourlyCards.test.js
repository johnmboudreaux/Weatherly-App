import React from 'react';
import { shallow, mount } from 'enzyme';
import HourlyCards from '../lib/HourlyCards';
import App from '../lib/App';
import HourlyCard from '../lib/HourlyCard';

describe('HourlyCards', () => {
  const hourCards = hourlyCardsArray.map((card, index) => {
    return <HourlyCard cardObject={card}
                       key={index}/>;
  });
  it('should render hourly cards', () => {
    const sevenHourCards = shallow(<HourlyCards
   hourlyCardsArray={hourlyCards.hourly_forecast}
 />);
    expect(sevenHourCards.find('HourlyCard'.length)).toEqual(7);
  });
});
