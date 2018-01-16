import React from 'react';
import HourlyCard from './HourlyCard';
import PropTypes from 'prop-types';

export default function HourlyCards(props) {
  return (
    <div>
      <h1 className='seven-hour-title'>7 Hour Forecast</h1>
      <div className='hourly-cards'>
      {
          props.hourlyCardsArray.map((card, index) => {
            return <HourlyCard cardObject={card}
                               key={index}/>;
          })
      }

      </div>
    </div>
  );
}

HourlyCards.propTypes = {
  hourlyCardsArray: PropTypes.array
};
