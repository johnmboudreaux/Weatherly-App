import React from 'react';
import Search from './Search'

export default function CurrentWeather(props) {
  return (
    <div className='current-weather'>
      <h1>Today's Conditions</h1>
      <h3 className='city'>{props.city}</h3>
      <div className='date-wrapper'>
        <p className='day-of-week'>{props.day}</p>
        <p className='date'>{props.month} / {props.date} / {props.year}</p>
      </div>
      <div className='conditions-wrapper'>
        <img className='icon' src={props.icon} />
        <p className='conditions'>{props.conditions}</p>
      </div>
      <div className='high-low-wrapper'>
        <p className='high'>{"Today's High"} {props.high}</p>
        <p className='low'>{"Today's Low"} {props.low}</p>
      </div>
      <div>
        <Search getData={props.getData}/>
    </div>
    </div>
  );
}
