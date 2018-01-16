import React from 'react';
import DailyCard from './DailyCard';
import PropTypes from 'prop-types';

export default function HourlyCards(props) {
  return (
    <div>
      <h1 className='ten-day-title'>10 Day Forecast</h1>
      <div className='daily-cards'>
      {
          props.dailyCardsArray.map((card, index) => {
            return <DailyCard cardObject={card}
                              key={index}/>;
          })
      }
    </div>
  </div>
  );
}

HourlyCards.propTypes = {
  dailyCardsArray: PropTypes.array
};
