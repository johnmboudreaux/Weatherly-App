import React, { Component } from 'react';
import HourlyCard from './HourlyCard';

export default function HourlyCards(props) {
  // if (!props.hourlyCardsArray.length) {
  //   return (<p>empty</p>)
  // }
  return (
    <div className='hourly-cards'>
      <h1>7 Hour Forcast</h1>
    {
        props.hourlyCardsArray.map((card, index) => {
          return <HourlyCard cardObject={card}
                             key={index}/>;
        })
    }

    </div>
  );
}
