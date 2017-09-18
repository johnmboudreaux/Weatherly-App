import React, { Component } from 'react';
import DailyCard from './DailyCard';

export default function HourlyCards(props) {
  // if (!props.dailyCardsArray.length) {
  //   return (<p>empty</p>)
  // }
  return (
    <div className='ten-day-title'>
      10 Day Forecast
      <div className='daily-cards'>
      {
          props.dailyCardsArray.map((card, index) => {
            console.log(card);
            return <DailyCard cardObject={card}
                              key={index}/>;
          })
      }
    </div>
  </div>
  );
}
