import React from 'react';

export default function CurrentWeather(props) {
  return (
    <div>
      <h3>{props.city}</h3>
      <p>{props.high}</p>
      <p>{props.low}</p>
      <p>{props.day}</p>
      <p>{props.month} / {props.date} / {props.year}</p>
      <p>{props.conditions}</p>
      <img src={props.icon} />
    </div>
  );
}
