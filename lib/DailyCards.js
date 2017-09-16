import React, { Component } from 'react';
import DailyCard from './DailyCard';

export default function HourlyCards(props) {
  // if (!props.dailyCardsArray.length) {
  //   return (<p>empty</p>)
  // }
  return (
    <div className='daily-cards'>
      <h2>Daily Cards</h2>
    {
        props.dailyCardsArray.map((card, index) => {
          return <DailyCard cardObject={card}
                             key={index}/>;
        })
    }

    </div>
  );
}
