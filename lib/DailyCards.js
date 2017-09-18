import React, { Component } from 'react';
import DailyCard from './DailyCard';

export default function HourlyCards(props) {
  // if (!props.dailyCardsArray.length) {
  //   return (<p>empty</p>)
  // }
  return (
    <div>
      <h1 className='ten-day-title'>10 Day Forecast</h1>
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
