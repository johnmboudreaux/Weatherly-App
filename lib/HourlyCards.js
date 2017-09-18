import React, { Component } from 'react';
import HourlyCard from './HourlyCard';

export default function HourlyCards(props) {
  // if (!props.hourlyCardsArray.length) {
  //   return (<p>empty</p>)
  // }
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
