import React from 'react';

export default function CurrentWeather(props) {
  return (
    <div className='current-weather'>
      <h1>Today's Conditions</h1>
      <h3 className='city'>{props.city}</h3>
      <p className='day-of-week'>{props.day}</p>
      <p className='date'>{props.month} / {props.date} / {props.year}</p>
      <p className='conditions'>{props.conditions}</p>
      <p className='high'>{"Today's High"} {props.high}</p>
      <p className='low'>{"Today's Low"} {props.low}</p>
      <img className='icon' src={props.icon} />
    </div>
  );
}
