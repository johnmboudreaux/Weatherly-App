import React, { Component } from 'react';

export default function DailyCard(props) {
  return (
    <div className='daily-card'>
      <p className='day-of'>{ props.cardObject.date.weekday }, { props.cardObject.date.monthname} {props.cardObject.date.day}</p>
      <h3 className='daily-icon-status'>{ props.cardObject.icon }</h3>
      <img className='daily-icon' src={ props.cardObject.icon_url }/>
      <h4 className='daily-high'>high { props.cardObject.high.fahrenheit }</h4>
      <h4 className='daily-low'>low { props.cardObject.low.fahrenheit }</h4>
      <h4 className='daily-date'> </h4>
    </div>
  );
}
