import React, { Component } from 'react';

export default function DailyCard(props) {
  console.log(props.cardObject.icon)
  return (
    <div className='daily-card'>
      <p className='daily-icon-status'>{ props.cardObject.icon }</p>
      <img className='daily-icon' src={ props.cardObject.icon_url }/>
      <h4 className='daily-high'>high { props.cardObject.high.fahrenheit }</h4>
      <h4 className='daily-low'>low { props.cardObject.low.fahrenheit }</h4>
      <h4 className='daily-date'> { props.cardObject.date.weekday }</h4>
    </div>
  );
}
