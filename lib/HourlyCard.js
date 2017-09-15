import React, { Component } from 'react';

export default function HourlyCard(props) {
  console.log(props.cardObject.icon)
  return (
    <div className='hourly-card'>
      <p className='hour-icon-status'>{ props.cardObject.icon }</p>
      <img className='hour-icon' src={ props.cardObject.icon_url }/>
      <h3 className='hour-time'>Hour { props.cardObject.FCTTIME.civil }</h3>
      <h4 className='hour-temp'>Temp { props.cardObject.temp.english }</h4>
    </div>
  );
}
