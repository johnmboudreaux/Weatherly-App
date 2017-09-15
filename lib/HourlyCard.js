import React, { Component } from 'react';

export default function HourlyCard(props) {
  return (
    <div className='hourly-card'>
      <h3 className='hour-time'>{ props.cardObject.hour }</h3>
      <img className='hour-icon' src={ props.cardObject.icon }/>
      <h4 className='hour-temp'>{ props.cardObject.temp }</h4>
    </div>
  );
}
