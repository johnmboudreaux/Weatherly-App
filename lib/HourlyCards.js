import React, { Component } from 'react';
import HourlyCard from './HourlyCard';

export default function HourlyCards(props) {
  if (!props.length) {
    console.log(props);
  }
  return (
    <div className='hourly-cards'>
      <p>sup</p>
    {
        props.hourlyCardsArray.map((card) => {
          return <HourlyCard cardObject={card}/>;
        })
    }

    </div>
  );
}
