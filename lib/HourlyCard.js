import React, { Component } from 'react';

export default function HourlyCard(props) {
  const cardObject = props;
  return (
    <div className='hourly-card'>
      <h3 className='hour-time'>{ cardObject.hour }</h3>
      <img className='hour-icon' src={ cardObject.icon }/>
      <h4 className='hour-temp'>{ cardObject.temp }</h4>
    </div>
  );
}
